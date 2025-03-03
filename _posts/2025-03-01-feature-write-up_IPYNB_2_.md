---
layout: post
title: Project Feature Write-up
description: A write-up of my InterTravel feature.
permalink: /posts/feature-write-up/
show_reading_time: False
comments: True
---

<br>
<hr>

## Description

My feature for this project is Lodging Listings. It allows users to enter the name of a hotel and a city and find a list of all hotels available in that city with the name. The user can add a rating out of 5 stars and a note to the hotel. On another page, users are able to see all reviews of hotels and the name of the user that added the review. Users can edit their own posts, and admins have the permission to delete any post.

This blog explains how I used Collegeboard's CPT requirements to refine my code.

<br>
<hr>

## 1. User Input Handling

<br>

### Collecting strings from DOM

This code shows how when the "Go" button is clicked, the strings are taken from the DOM to be used later.
```js
document.addEventListener("DOMContentLoaded", (event) => {
    const goButton = document.getElementById("goButton");
    goButton.addEventListener("click", FindHotels);
});

async function FindHotels() {
    var destination = document
        .getElementById("destination")
        .value.trim()
        .replace(/\s+/g, "+");
    var place = document
        .getElementById("place")
        .value.trim()
        .replace(/\s+/g, "+");

    // More code after
}
```

<br>

### Posting hotel data

This code will take in parameters to POST hotel data to the backend. 
```js
// This is in lodging_listings_paris.md

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

### Fetching hotel data

Here, a GET request is used to fetch the hotel data from the backend.
```js
// This is in lodging_reviews_paris.md

async function fetchLikedHotels() {
    try {
        const response = await fetch(`${pythonURI}/api/hotel`, {...fetchOptions});

        if (!response.ok) {
            throw new Error('Failed to fetch hotels: ' + response.statusText);
        }

        const data = await response.json();

        // More code after
    }
}
```

This is later put into HTML objects that are added to the DOM like so:
```js
// This is in lodging_reviews_paris.md

data.forEach(item => {

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${item.hotel}</h2>
        <p>${item.city}, ${item.country}</p>
    `;

    const starsContainer = document.createElement("div");
    starsContainer.className = "stars-container";
    let selectedRating = item.rating;
});
```

<br>

### Initialize, backup, and restoring code

Here, I add some tester data in the backend that will be added to the database once initialized.
```py
# This is in model/hotel.py

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

I can also back up the data through what is existing in the database.
```py
# This is in main.py

def extract_data():
    data = {}
    with app.app_context():
        data['hotels'] = [hotel.read() for hotel in Hotel.query.all()]
    return data

def save_data_to_json(data, directory='backup'):
    if not os.path.exists(directory):
        os.makedirs(directory)
    for table, records in data.items():
        with open(os.path.join(directory, f'{table}.json'), 'w') as f:
            json.dump(records, f)
    print(f"Data backed up to {directory} directory.")

@custom_cli.command('backup_data')
def backup_data():
    data = extract_data()
    save_data_to_json(data)
    backup_database(app.config['SQLALCHEMY_DATABASE_URI'], app.config['SQLALCHEMY_BACKUP_URI'])
```

If a user accidentally lost their data and need to restore information, I can restore the database as well.

```py
# This is in model/hotel.py

@staticmethod
def restore(data):
    for hotel_data in data:
        _ = hotel_data.pop('id', None)  # Remove 'id' from post_data
        hotel_name = hotel_data.get("hotel", None)
        hotel = Hotel.query.filter_by(hotel=hotel_name).first()
        if hotel:
            hotel.update(hotel_data)
        else:
            hotel = Hotel(**hotel_data)
            hotel.update(hotel_data)
            hotel.create()
```

```py
# This is in main.py

def load_data_from_json(directory='backup'):
    data = {}
    for table in ['hotels']:
        with open(os.path.join(directory, f'{table}.json'), 'r') as f:
            data[table] = json.load(f)
    return data

def restore_data(data):
    with app.app_context():
        _ = Hotel.restore(data['hotel_data'])
    print("Data restored to the new database.")

@custom_cli.command('restore_data')
def restore_data_command():
    data = load_data_from_json()
    restore_data(data)
```

<br>
<hr>

## 2. Collection Usage

<br>

### Lists & Dictionaries

Hotels are retrieved from the database as Python lists. This is not possible without SQLAlchemy, which integrates Python with SQL. This info is then exported as a JSON dictionary so that the frontend can access it properly.

Here, I query the database, filtering by both hotel and user. Once I get a list of all hotels and the username of ther person that added the hotel, the JSONified list is returned.

```py
# This is in api/hotel.py

hotels = db.session.query(Hotel, User).join(User, Hotel.user_id == User.id).all()
hotel_list = [{"id": h.Hotel.id, "user_id": h.User._name, "current_user": current_user._name, "is_admin": is_admin, "hotel": h.Hotel.hotel, "city": h.Hotel.city, "country": h.Hotel.country, "rating": h.Hotel.rating, "note": h.Hotel.note} for h in hotels]

return jsonify(hotel_list)
```

### CRUD

Through the CRUD functions of create, read, update, and delete, lists and dictionaries are used to handle data.

```py
# This is in model.hotel.py

def create(self):

    try:
        db.session.add(self)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        logging.warning(f"IntegrityError: Could not save '{self.user_id}', '{self.hotel}', '{self.city}', '{self.country}', '{self.rating}', and '{self.note} due to {str(e)}.")
        return None
    return self
    
def read(self):

    return {
        "id": self.id,
        "user_id": self.user_id,
        "hotel": self.hotel,
        "city": self.city,
        "country": self.country,
        "rating": self.rating,
        "note": self.note
    }

def delete(self):

    try:
        db.session.delete(self)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e
    
def update(self, data):

    self.user_id = data.get('user_id', self.user_id)
    self.hotel = data.get('hotel', self.hotel)
    self.city = data.get('city', self.city)
    self.country = data.get('country', self.country)
    self.rating = data.get('rating', self.rating)
    self.note = data.get('note', self.note)
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e


@staticmethod
def restore(data):
    for hotel_data in data:
        _ = hotel_data.pop('id', None)  # Remove 'id' from post_data
        hotel_name = hotel_data.get("hotel", None)
        hotel = Hotel.query.filter_by(hotel=hotel_name).first()
        if hotel:
            hotel.update(hotel_data)
        else:
            hotel = Hotel(**hotel_data)
            hotel.update(hotel_data)
            hotel.create()
```

<br>
<hr>

## 3. Student-Developed Procedure

One of the features that I developed is the hotel-finding feature. I used an API to be able to search for hotels by their name and city.

Here, I use the API and filter by the names that the user added. Then, I add the hotels through card divs in the DOM.

```js
// This is in lodging_listings_paris.md

import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

document.addEventListener("DOMContentLoaded", (event) => {
    const goButton = document.getElementById("goButton");
    goButton.addEventListener("click", FindHotels);
});

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
        console.log(data)
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

            const starsContainer = document.createElement("div");
            starsContainer.className = "stars-container";
            let selectedRating = 5;

            for (let i = 1; i <= 5; i++) {
                const star = document.createElement("span");
                star.className = "star";
                star.textContent = "★";
                star.dataset.value = i;
                star.onclick = () => {
                    selectedRating = i;
                    updateStars(starsContainer, selectedRating);
                };
                starsContainer.appendChild(star);
            }

            updateStars(starsContainer, selectedRating);

            card.appendChild(starsContainer);
        
            const saveButton = document.createElement("button");
            saveButton.className = "save-button";
            saveButton.textContent = "Add review";
            saveButton.onclick = () => {
                postHotelData(hotelTitle, cityTitle, countryTitle, selectedRating);
                saveButton.textContent = "Review added!";
            };
            card.appendChild(saveButton);

            body.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```

Furthermore, I implemented admin features, allowing admins to be able to delete any post while users can only delete their own posts.

Each card will only have a review button if the user is an admin or if the user is the card's author.

```js
// This is in lodging_reviews_paris.md

if (item.is_admin || item.current_user == item.user_id) {
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
        deleteHotel(item.id);
        hotelCount -= 1;
        document.getElementById('hotelCount').innerHTML = `<h2>There are ${hotelCount} reviews of hotels!</h2>`;
        card.remove();
    };
    card.appendChild(removeButton);
}
```

I also added an extra layer of security for this in the backend, ensuring that only admins had the permission to delete a post.

```py
# This is in api/hotel.py

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

I meet the CPT requirements in this section with my code.

### Must have a defined name and return type

The `delete()` method in the backend will delete a hotel based on the ID, and it will return either `{'message': 'Hotel deleted successfully'}` if successful, or one of the error messages if not.

### Must use at least one parameter that affects functionality

The `findHotels()` function takes parameters for destination and city name, which will lead to a different JSON output from the API depending on where the hotel is.

### Must include an algorithm with sequencing, selection, and iteration

The sequence of events is as follows:
1. The user enters a city name and hotel name and pressed the "Go" button
2. The user may add a rating for the hotel and POST it to the backend
3. On the next page in the frontend, a GET request is submitted to retrieve all the hotels from the backend
4. Each time, the UI of the frontend will update

<br>
<hr>

## 4. Algorithm Implementation

### Sequencing

The sequence of events for the user is as follows:
1. The user may POST a hotel review, GET a list of all hotels, PUT a new rating for their hotel, or DELETE their review altogether.
2. A request is made to the backend to perform the action.
3. The backend hotel API processes the request and returns a response based on whether or not the request was successful.
4. The frontend receives the response from the backend.
5. The frontend updates is UI according to the response.

### Selection

Error handling and conditions are also implemented in the backend. For example, if a POST does not contain the required information, then an error message is returned.

```py
# This is in api/hotel.py

if not data or 'hotel' not in data or 'city' not in data or 'country' not in data or 'rating' not in data:
    return {'message': 'Hotel, location, and rating are required'}, 400
```

### Iteration

In the frontend, I loop through each entry in the database and add each one to the DOM.

```js
// This is in lodging_reviews_paris.md

data.forEach(item => {

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${item.hotel}</h2>
        <p>${item.city}, ${item.country}</p>
    `;

    const starsContainer = document.createElement("div");
    starsContainer.className = "stars-container";
    let selectedRating = item.rating;
});
```

<br>
<hr>

## 5. Program Output

There is visual output when a user submits a hotel rating, views the hotel ratings, or changes their rating. These actions are updated both in the frontend and the backend.

<br>
<hr>

## 6. Commenting and Acknowledgement

I have comments throughout my code that explains what each function does.


