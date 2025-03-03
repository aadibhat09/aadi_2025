---
layout: post
title: 5 Big Things
permalink: /posts/5-big-things/
comments: True
---

<br>

## 1. Static Hotel API Feature with OpenStreetMap

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
        console.log(data)
    }
```

<br>
<hr>

## 2. Dynamic API feature with Lodging Listings

```js
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
```py
@token_required()
@cross_origin(supports_credentials=True)  # Add this decorator to handle CORS for PUT requests
def post(self):

    current_user = g.current_user
    data = request.get_json()

    if not data or 'hotel' not in data or 'city' not in data or 'country' not in data or 'rating' not in data:
        return {'message': 'Hotel, location, and rating are required'}, 400

    hotel = Hotel(
        user_id=current_user.id,
        hotel=data.get('hotel'),
        city=data.get('city'),
        country=data.get('country'),
        rating=data.get('rating'),
        note=data.get('note')
    )

    try:
        hotel.create()
        return jsonify(hotel.read())
    except Exception as e:
        return {'message': f'Error saving hotel: {e}'}, 500
```

<br>
<hr>

## 3. Admin Features to allow for website safety

```js
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
```py
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

## 4. Deploying the backend with AWS and Docker

<img src="../../images/writeup/aws-record.png" width="1000px" height="auto">

<img src="../../images/writeup/docker.png" width="1000px" height="auto">
<img src="../../images/depblog.png" width="1000px" height="auto">

<br>
<hr>

## Burndown List for Organization

<img src="../../images/image.png" width="1000px" height="auto">







