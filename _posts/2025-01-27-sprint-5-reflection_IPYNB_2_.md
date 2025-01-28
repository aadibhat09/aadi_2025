---
layout: post
title: Sprint 5 Reflection
description: Reflection for Sprint 5
permalink: /posts/sprint-5-reflection
comments: True
---

## Intro to Requests

### Group's purpose

"To make a budget-friendly travel planner that will allow users to find activities, hotels, restaurants, and much more."
- Activity Planner: users can search for activities in the city they are visiting and ask questions to a chatbot for help.
- Lodging Listings: users can search for hotels in their city and give them a star rating.
- Packing Portal: users can select which items to carry with them while travelling.
- Cuisine Chronicles: users can view the menu of restaurants and give reviews.
- Fair Fares: users can search for flights to and from their destination and compare prices.
- Budget Brilliance: users can set their budget for the trip and see suggestions.
- Wellness waypoints: users can search for hospitals in their area in the case of an emergency.

### My purpose

My feature is Lodging Listings. This feature allows users to enter the name of a hotel and a city, and uses an online API to collect information on these hotels. The user can then give hotels a rating out of 5 stars and save them for later. If the user is no longer interested in the hotel or has a different opinion, they can unsave the hotel or change its rating.

<br>

## List Requests

### Formatting JSON to DOM

```js
const data = await response.json();

data.forEach((index) => {

    const card = document.createElement("div");
    card.className = "card";

    const hotelTitle = index['display_name'].split(', ')[0];
    const cityTitle = index['address']['city'];
    const countryTitle = index['address']['country'];

    const hotelElement = document.createElement("h2");
    hotelElement.textContent = hotelTitle;
    card.appendChild(hotelElement);
    
    const locationElement = document.createElement("p");
    locationElement.textContent = `${cityTitle}, ${countryTitle}`;
    card.append(locationElement);

    body.appendChild(card);
});
```

1. `const data = await response.json();`
    - Parse the JSON response from the API into a JavaScript object.
2. `data.forEach((index) => {`
    - Iterate through each item in the data.
3. `const card = document.createElement("div");`
    - Create a new div which will contain information from the data.
4. `const hotelTitle = index['display_name'].split(', ')[0];`
    - Get individual info from the data.
    - Repeat for city and country.
5. `const hotelElement = document.createElement("h2");`
    - Create a new header which will contain information from the hotel name.
    - Repeat for city and country.
6. `card.appendChild(hotelElement);`
    - Add the hotel element to the card div.
    - Repeat for city and country.
7. `body.appendChild(card);`
    - Add the card div to the body so that it shows in the frontend.

### Extracting a Python list

```py
def post(self):

    data = request.get_json()

    if not data or 'hotel' not in data or 'city' not in data or 'country' not in data or 'rating' not in data:
        return {'message': 'Hotel, location, and rating are required'}, 400

    hotel = Hotel(
        hotel=data.get('hotel'),
        city=data.get('city'),
        country=data.get('country'),
        rating=data.get('rating')
    )

    try:
        hotel.create()
        return jsonify(hotel.read())
    except Exception as e:
        return {'message': f'Error saving hotel: {e}'}, 500
```

Here, in my `post()` function in my API, I create a new object of the class `Hotel` and assign each of its columns to what is read in the user input. This can then be added to the database.

### CRUD

Apart from the POST method shown above, I also have GET, PUT, and DELETE.

```py
def get(self):

    hotel_id = request.args.get('id')

    if hotel_id:

        hotel = Hotel.query.get(hotel_id)
        if not hotel:
            return {'message': 'Hotel not found'}, 404
        return jsonify(hotel.read())

    all_hotels = Hotel.query.all()
    return jsonify([hotel.read() for hotel in all_hotels])
```

In this `get()` method, I get each hotel from its ID. Then, it returns a JSON of all of these hotels.

```py
def put(self):

    data = request.get_json()

    if not data or 'id' not in data:
        return {'message': 'ID is required for updating a hotel'}, 400

    hotel = Hotel.query.get(data['id'])
    if not hotel:
        return {'message': 'Hotel not found'}, 404

    try:
        hotel.update(data)
        return jsonify(hotel.read())
    except Exception as e:
        return {'message': f'Error updating hotel: {e}'}, 500
```

In this `put()` method, I get a hotel based on the ID the user provides. Then, it will attempt to update this line based on the JSON that the user provides.

```py
def delete(self):

    data = request.get_json()

    if not data or 'id' not in data:
        return {'message': 'ID is required for deleting a hotel'}, 400

    hotel = Hotel.query.get(data['id'])
    if not hotel:
        return {'message': 'Hotel not found'}, 404

    try:
        hotel.delete()
        return {'message': 'Hotel deleted successfully'}, 200
    except Exception as e:
        return {'message': f'Error deleting hotel: {e}'}, 500
```

In this `delete()` method, I get a hotel based on the ID the user provides. Then, it will attempt to delete this line.

<br>

## Algorithmic Code Request

```py
class HotelAPI:

    class _CRUD(Resource):
        def post(self):

            data = request.get_json()

            if not data or 'hotel' not in data or 'city' not in data or 'country' not in data or 'rating' not in data:
                return {'message': 'Hotel, location, and rating are required'}, 400

            hotel = Hotel(
                hotel=data.get('hotel'),
                city=data.get('city'),
                country=data.get('country'),
                rating=data.get('rating')
            )

            try:
                hotel.create()
                return jsonify(hotel.read())
            except Exception as e:
                return {'message': f'Error saving hotel: {e}'}, 500

        def get(self):

            hotel_id = request.args.get('id')

            if hotel_id:

                hotel = Hotel.query.get(hotel_id)
                if not hotel:
                    return {'message': 'Hotel not found'}, 404
                return jsonify(hotel.read())

            all_hotels = Hotel.query.all()
            return jsonify([hotel.read() for hotel in all_hotels])

        def put(self):

            data = request.get_json()

            if not data or 'id' not in data:
                return {'message': 'ID is required for updating a hotel'}, 400

            hotel = Hotel.query.get(data['id'])
            if not hotel:
                return {'message': 'Hotel not found'}, 404

            try:
                hotel.update(data)
                return jsonify(hotel.read())
            except Exception as e:
                return {'message': f'Error updating hotel: {e}'}, 500

        def delete(self):

            data = request.get_json()

            if not data or 'id' not in data:
                return {'message': 'ID is required for deleting a hotel'}, 400

            hotel = Hotel.query.get(data['id'])
            if not hotel:
                return {'message': 'Hotel not found'}, 404

            try:
                hotel.delete()
                return {'message': 'Hotel deleted successfully'}, 200
            except Exception as e:
                return {'message': f'Error deleting hotel: {e}'}, 500
```

This is my entire HotelAPI class, with each CRUD operation.

- GET: fetches all hotels and returns a JSON.
- POST: adds a new hotel to the database with hotel name, city name, country name, and rating.
- PUT: updates a rating of a hotel to what the user inputs.
- DELETE: deletes a hotel from the database altogether.

<br>

## Call to Algorithm Request

```js
async function postHotelData(hotelTitle, cityTitle, countryTitle, rating) {

  const postData = {
    hotel: hotelTitle,
    city: cityTitle,
    country: countryTitle,
    rating: rating
  };

  try {
    const response = await fetch('http://127.0.0.1:8887/api/hotel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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

The `postHotelData()` method in my frontend is used to post a row with hotel, city, country, and rating info. All this information is passed in through the parameters of the method. A dictionary is made with this information, and a POST request is made with the JSONified dictionary.

The response fetches from the endpoint `http://127.0.0.1:8887/api/hotel`. Currently, this will only work when running locally. This endpoint is reaching the HotelAPI class from earlier.

If the request was successful, the logged response is a JSON object with a message of the hotel that was created. For example: `{"city": "San Diego", "country": "United States", "hotel": "Hilton", "id": 4, "rating": "5"}`.

If the request was unsuccessful due to the body not having the correct information, the logged response is: `{"message": "Hotel, location, and rating are required"}`.

```js
async function fetchLikedHotels() {
    try {
        const response = await fetch(`http://127.0.0.1:8887/api/hotel`, {});

        if (!response.ok) {
            throw new Error('Failed to fetch hotels: ' + response.statusText);
        }

        const data = await response.json();
    }
}
```

The `fetchLikedHotels()` method in my frontend is used to get all of the rows saved in my database. No body is required for a GET request because we are simply fetching the data. I have many more lines of code in this method in my frontend that formats the response into readable cards for the user to understand.

If the request was successful, the logged response is a JSON object with the list of the hotels in the database. For example: `{"city": "San Diego", "country": "United States", "hotel": "Hilton", "id": 4, "rating": "5"}`.

If the request was unsuccessful for whatever reason, the logged response is: `{'message': 'Hotel not found'}`.

```js
async function putHotelData(id, newRating) {
    
    const putData = {
        id: id,
        rating: parseInt(newRating)
    };

    try {
        const response = await fetch(`http://127.0.0.1:8887/api/hotel`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Put response:', data);
    } catch (error) {
        console.error("Error putting data:", error);
    }
}
```

The `putHotelData()` method is used to update a star rating for one of the hotels. This method has parameters for ID, which is the row for the hotel, and newRating, which the user gives while interacting with the frontend. A dictionary is made with the ID and new rating, and a PUT request is made with the JSONified dictionary.

If the request was successful, the logged response is a JSON object with a message of the hotel that was edited. For example: `{"city": "Paris", "country": "France", "hotel": "Hilton", "id": 1, "rating": "123"}`.

If the request was unsuccessful for due to the body not having the correct information, the logged response is: `{'message': 'Hotel not found'}`.

```js
async function deleteHotel(id) {

    const deleteData = {
        id: id,
    };

    try {
        const response = await fetch(`http://127.0.0.1:8887/api/hotel`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Delete response:', data);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}
```

The `deleteHotelData()` method is used to remove a hotel from the database completely. This method has parameters for ID, which is the row for the hotel. A dictionary is made with the ID, and a DELETE request is made with the JSONified dictionary.

If the request was successful, the logged response is a JSON object with the message: `{"message": "Hotel deleted successfully"}`.

If the request was unsuccessful for due to the body not having the correct information, the logged response is: `{'message': 'Hotel not found'}`.
