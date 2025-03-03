---
layout: post
title: Project Feature Write-up 2
description: A write-up of my InterTravel feature.
permalink: /posts/feature-write-up-2/
comments: True
---

<br>
<hr>

## Description

My feature for this project is Lodging Listings. It allows users to enter the name of a hotel and a city and find a list of all hotels available in that city with the name. The user can add a rating out of 5 stars and a note to the hotel. On another page, users are able to see all reviews of hotels and the name of the user that added the review. Users can edit their own posts, and admins have the permission to delete any post.

This blog explains how I used Collegeboard's CPT requirements to refine my code.

<br>
<hr>

## Big Idea 1.4

Big Idea 1.4 is about debugging code and fixing errors. This was a big part of my journey while developing my feature.

- **Backend Debugging**: Before I tested my API on my frontend, I used Postman to ensure that I was able to submit requests to the backend and receive a response. Here, I use a GET request to my hotel API in the backend to receive information about the hotels that I have stored in the database.

<img src="../../images/writeup/postman-get.png" width="1000px" height="auto">

<br>

- **Frontend Debugging**: After I receieved a successful response through Postman, I attempted to repeat these requests through my frontend and viewing the console output to analyze errors. Here, I received an error because I am not logged in and I am not able to access my hotel API.

<img src="../../images/writeup/frontend-errors.png" width="500px" height="auto">

<br>

- **End-to-End Tracing**: Now, I had to ensure that the data flow between the frontend and backend was seamless. I would attempt a GET request on the frontend to see if I could fetch data from the backend, or a POST request on the frontend to see if I could add data to the backend. Here, I am posting information about a hotel from the frontend to the backend, and the data shows in the backend table.

<img src="../../images/writeup/post-hotel.gif" width="1000px" height="auto">

<br>

- **Testing**: I added some test data to my backend to validate the functionality and performance of my API. This test data includes random hotels and ratings and it shows in my frontend as well. This tester data is initialized through my initHotel() method and will be added to the database whenever I initialize the database.

```py
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
<img src="../../images/writeup/defaultHotels.png" width="500px" height="auto">

<br>
<hr>

## Big Idea 2

Big Idea 2 is about managing and storing data in a database. This is how I incorporated this idea into my feature.

- **Database Management with SQLite**: My hotel data is stored in a table in the user_management database, and I can view and edit the data through SQLite. Whenever I submit a POST, PUT, or DELETE request, the data in the table will be updated.

<img src="../../images/writeup/hotel-data.png" width="1000px" height="auto">

<br>

- **Image Upload and Storage**: Users are able to upload a custom profile picture of their choice. This picture is stored in the users table through the filename.

<img src="../../images/writeup/pfp.png" width="500px" height="auto">

<br>

- **Data Security and Privacy**: Normal users are only able to delete and update their own posts. However, to keep the website safe, admins are able to delete any post that they deem unsafe. I incorporated this through a conditional in my DELETE method in my hotel API.

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

- **Data Backup and Recovery**: To ensure that there is minimal accidental data loss, I implemented a script that will back up the database to a separate database. Through Cockpit, I have added a crontab that runs this script periodically so that we will always have a copy of the database if needed.

```sh
#!/bin/bash

cd /home/ubuntu/intertravel_backend

# Verify the installation and check the Python version
python --version

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python -m venv venv
fi

# Activate the virtual environment
source venv/bin/activate

# Install the required Python packages
pip install -r requirements.txt

cd /home/ubuntu/intertravel_backend
./scripts/db_backup.py
```

<br>
<hr>

## Big Idea 4

Big Idea 4 is about deploying the Flask project onto the internet so that it is available for anyone to use. This is how I, as the group's deployment admin, accomplished this.

- **Deployment Strategies**: Our teacher set up an AWS server for all groups to deploy their projects onto. I added a record for `intertravel.stu.nighthawkcodingsociety.com` to deploy the Flask backend. I also added our repository to the Cockpit to be able to update it when needed.

<img src="../../images/writeup/aws-record.png" width="1000px" height="auto">
<img src="../../images/writeup/cockpit.png" width="1000px" height="auto">

<br>

- **DNS**: Each domain has its own IP address. When I deployed our backend through AWS, the domain name `intertravel.stu.nighthawkcodingsociety.com` was mapped to an IP address of `3.129.109.200`. Whenever a user enters my domain name, it will be mapped to this IP address, which is how devices are able to communicate with websites.

<img src="../../images/writeup/aws-record.png" width="1000px" height="auto">

<br>

- **HTTP and RESTful APIs**: I have used the GET, POST, PUT, and DELETE HTTP methods to interact with the backend. In my backend, I have a file called hotel.py, which is my API that manages all these requests. This is an example of my POST request in the backend, followed by how I submit a POST request through my frontend.

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

<br>

- **Security and Authentication**: In the nginx file, I have it set so that the only domain that can send API requests to the backend is `https://kiruthic-selvakumar.github.io`, which is our frontend domain. I also used Certbot to enforce HTTPS and encrypt the website to ensure that it is fully secure. This is the nginx file.

```
server {
    server_name intertravel.stu.nighthawkcodingsociety.com;
    location / { 
        proxy_pass http://localhost:8101;

        # Preflighted requests 
        if ($request_method = OPTIONS ) {
                add_header "Access-Control-Allow-Credentials" "true" always;
                add_header "Access-Control-Allow-Origin" "https://kiruthic-selvakumar.github.io" always;
                add_header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS, HEAD" always; # Make sure the request methods above match here
                add_header "Access-Control-Allow-MaxAge" 600 always;
                add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept" always;
                return 204;
        }
    }

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/intertravel.stu.nighthawkcodingsociety.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/intertravel.stu.nighthawkcodingsociety.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = intertravel.stu.nighthawkcodingsociety.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;
    server_name intertravel.stu.nighthawkcodingsociety.com;
    return 404; # managed by Certbot
}
```

<br>

- **Monitoring and Logging**: I have error handling in my API so that a different, clear message is sent for each error received. For example, if I attempt to POST without the name of the hotel, I will get an error stating that there is required information that is missing. These errors will be logged in the console of the frontend as well which will help me to debug the problem. This is the error handling I have implemented for this example, and if I try to submit a POST request without the hotel name, I wil receive the error `400`.

```py
if not data or 'hotel' not in data or 'city' not in data or 'country' not in data or 'rating' not in data:
    return {'message': 'Hotel, location, and rating are required'}, 400
```

<img src="../../images/writeup/error-400.png" width="1000px" height="auto">




