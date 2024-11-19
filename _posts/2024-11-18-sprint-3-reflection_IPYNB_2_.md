---
layout: post
title: Sprint 3 Reflection
description: Reflection for Sprint 3
permalink: /posts/sprint-3-reflection
comments: True
---

<br>

For sprint 3, I worked mainly with the frontend, although I also helped in the communcation of the backend and the frontend.

Our project is called Instabox. Our theme was a chatting platform where the server sends you a message at a random time every day and you are ranked on a leaderboard among other users based on how quickly you respond to the message. To integrate this, we needed a frontend where the user could enter messages and customize their profile, and a backend to store the messages.

I started by working on the frontend. I implemented a chatbox that appended messages the user entered, a profile page where the user could update their profile picture, status, and hometown, and a settings page where the user could update their username or log out. However, without the backend, none of these saved on reload. So, I implemented a temporary function that saved this data in the user's local storage so that we could easily make the switch to using the backend when needed.

Our group decided to expand our platform's horizons and we started implementing APIs to enhance the user experience. We experimented in several trivia APIs before settling on one from API Ninjas. I helped implement this API in the frontend by creating a method that fetched this data from the backend and displayed it on the frontend. It was great to see the messages in the backend update real-time whenever the user sent a message or generated a trivia question.

My greatest accomplishment in this sprint was implementing the frontend-backend communication of the trivia API. We had a lot of trouble with making the frontend and backend "talk" to each other due to a mixup of API requests. After sorting it out, I was able to smoothly create a way to display the content from the trivia API on the frontend.
