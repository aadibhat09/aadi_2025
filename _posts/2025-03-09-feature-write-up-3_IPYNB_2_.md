---
layout: post
title: Project Feature Write-up 3
description: A write-up of my InterTravel feature.
permalink: /posts/feature-write-up-3/
comments: True
---

<br>
<hr>

## Description

My feature for this project is Lodging Listings. It allows users to enter the name of a hotel and a city and find a list of all hotels available in that city with the name. The user can add a rating out of 5 stars and a note to the hotel. On another page, users are able to see all reviews of hotels and the name of the user that added the review. Users can edit their own posts, and admins have the permission to delete any post.

This blog explains how I used Collegeboard's CPT requirements to refine my code.

<br>
<hr>

## 1. `postHotelData()` in Frontend

This function takes in four parameters from the DOM. A fifth argument is inputted by the user once the function is called, and these five arguments are sent to the backend to store in a database.

This meets the CPT requirement of **user input handling** because the `rating` and `note` parameters are inputted by the user through a text field. This also meets the requirement of **list usage** by collecting the hotel information from the DOM. Furthermore, this utilizes **algorithm implementation** by first **sequencing** (posts a hotel from user input and update UI to say "rating added"), **selecting** (makes sure that all parameters, including the `note`, are available), **iteration** (using a loop to iterate through all hotel cards and add them to the DOM), and **program output** (by updating the button from saying "add rating" to "rated").

In this function, I loop through each hotel from the OpenStreetMap API. The hotel is a JSON with properties such as name, city, country, etc. I create a card div to prepare to add hotel information. Then, I store the hotel information from the JSON into variables. I create a button to add a review, that when clicked will call the postHotelData() function to update the backend. In that function, I take in parameters for hotel, city, and country name, and the rating. I ask the user for a note to add, and then this information is stored in a JSON that is posted to the backend.

```js

async function findHotels() {

    data.forEach((index) => {

      const card = document.createElement("div");
      card.className = "card";

      const hotelTitle = index['display_name'].split(', ')[0]
      const cityTitle = index['address']['city']
      const countryTitle = index['address']['country']
    
    })

    // ...

        const saveButton = document.createElement("button");
        saveButton.className = "save-button";
        saveButton.textContent = "Add review";
        saveButton.onclick = () => {
            postHotelData(hotelTitle, cityTitle, countryTitle, selectedRating);
            saveButton.textContent = "Review added!";
        };
        card.appendChild(saveButton);
}

// ...

async function postHotelData(hotelTitle, cityTitle, countryTitle, rating) {

    const note = prompt("Add a note about this hotel:");

    const postData = {
        hotel: hotelTitle,
        city: cityTitle,
        country: countryTitle,
        rating: rating,
        note: note
    };

    try {
        const response = await fetch(`${pythonURI}/api/hotel`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Post response:', data);
    } catch (error) {
        console.error("Error posting data:", error);
    }
}
```

<br>
<hr>

## 2. Backend API with Flask (GET)

This uses a RESTful API using Flask. It uses the CRUD operations of create (post), read (get), update (put) and delete.

This meets the CPT requirement of **user input handling** because the CRUD operations process input that the user gives, for example a user could ask to update a rating. This also meets the requirement of **list usage** by storing hotel data in a database. Furthermore, this is a **student-developed procedure**. For example, my DELETE method will check for an ID in the body, ensure that the current user is an admin, and update the database likewise. This uses **algorithms** by first **sequencing** (ensures that the input is valid and contains an ID), **selecting** (returns an error if the the user is not an admin), **iteration** (the method is called whenever a delete request is submitted), and **program output** (it will result in the frontend updating or receving an error).

In this API, I have a CRUD class where I use each CRUD request to process. This example is the delete request. I ensure that the data that is in th request contains an ID. If not, an error is returned. I also ensure that the current user is an admin for safety purposes. If these criteria are met, then the hotel is deleted from the backend and a success message is sent.

```py
class HotelAPI:

    class _CRUD(Resource):

        # ...

        def delete(self):
            
            current_user = g.current_user

            data = request.get_json()

            if not data or 'id' not in data:
                return {'message': 'ID is required for deleting a hotel'}, 400

            if current_user.role == 'Admin':
                hotel = Hotel.query.get(data['id'])
                if not hotel:
                    return {'message': 'Hotel not found'}, 404
                try:
                    hotel.delete()
                    return {'message': 'Hotel deleted successfully'}, 200
                except Exception as e:
                    return {'message': f'Error deleting hotel: {e}'}, 500
            else:
                return {'message': 'Only Admin can delete hotels'}, 403
```

<br>
<hr>

## 3. Database Management with SQLAlchemy

All of the data is stored in `user_management.db`.

This meets the CPT requirement of **user input handling** because each of the properties of this class are inputted by the user. This also meets the requirement of **list usage** by storing hotel data in a database. This uses **algorithms** by first **sequencing** (through the `initHotel()` method), **selecting** (returns an integrity error if eneded), **iteration** (each test data is added to the database), and **program output** (the database will be updated).

In my hotel model, I define each parameter for my hotel that is stored as a column in the table. In the initHotel() function, I create test data with the Hotel class that is added to the backend whenever I clean the database. It will iterate through this test data to add it.

```py
class Hotel(db.Model):

    __tablename__ = 'hotels'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hotel = db.Column(db.String(3), nullable=False)
    city = db.Column(db.String(3), nullable=False)
    country = db.Column(db.String(3), nullable=False)
    rating = db.Column(db.String(3), nullable=False)
    note = db.Column(db.String(3), nullable=False)

    def __init__(self, user_id, hotel, city, country, rating, note):

        self.user_id = user_id
        self.hotel = hotel
        self.city = city
        self.country = country
        self.rating = rating
        self.note = note

    # ...

    def initHotel():

        with app.app_context():

            db.create_all()

            test_data = [
                Hotel(user_id=1, hotel='Hilton', city='Paris', country='France', rating=5, note="Beautiful hotel! Amazing pool and view!"),
                Hotel(user_id=2, hotel='Holiday Inn', city='San Diego', country='USA', rating=2, note="Not the best hotel, but it was cheap."),
                Hotel(user_id=3, hotel='Motel 12345', city='Los Angeles', country='USA', rating=1, note="Terrible hotel. Do not stay here!"),
            ]
            
            for entry in test_data:
                try:
                    entry.create()
                    print(f"Record created: {repr(entry)}")
                except IntegrityError:
                    db.session.remove()
                    print(f"Record exists or error: {entry.hotel}, {entry.city}, {entry.country} and {entry.rating}")
```

<br>
<hr>

## 4. OpenStreetMap API

I used an API from OpenStreetMap to find hotels.

This meets the CPT requirement of **user input handling** because the data is added to the DOM to later be changed by the user. This also meets the requirement of **list usage** by collecting the data as a JSON to extract certain keys.

In this function, I use the OpenStreetMap API while filtering for destination and place. The response is a JSON. The rest of the code was explained earlier, as I parse through each hotel in the JSON and add it to the DOM.

```js
async function FindHotels() {
    var destination = document
        .getElementById("destination")
        .value.trim()
        .replace(/\s+/g, "+");
    var place = document
        .getElementById("place")
        .value.trim()
        .replace(/\s+/g, "+");
    const url = `https://nominatim.openstreetmap.org/search?q=${destination},${place}&format=json&addressdetails=`;
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "MyHotelApp/1.0 (contact@example.com)",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const body = document.getElementById("main-content");
        data.forEach((index) => {

            const card = document.createElement("div");
            card.className = "card";

            const hotelTitle = index['display_name'].split(', ')[0]
            const cityTitle = index['address']['city']
            const countryTitle = index['address']['country']

            const hotelElement = document.createElement("h2");
            hotelElement.textContent = hotelTitle;
            card.appendChild(hotelElement);
            
            const locationElement = document.createElement("p");
            locationElement.textContent = `${cityTitle}, ${countryTitle}`;
            card.append(locationElement);
        }
    }
}
```
