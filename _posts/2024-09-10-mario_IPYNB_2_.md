---
layout: post
title: Mario
description: A random post about Mario!
permalink: /posts/mario
comments: True
---

<br>

Mario is a video game character created by Nintendo. He is an iconic mascot of the company and one of the most recognizable characters in gaming history! Mario is often portrayed as an Italian plumber who lives in the Mushroom Kingdom, a fantasy world filled with colorful characters and creatures, such as Toads, Goombas, and Koopas.

<img src="../images/mario/1.png">

The main goal in most Mario games is to rescue Princess Peach, who’s frequently kidnapped by Bowser (L bozo), a giant turtle-dinosaur-dog hybrid thing. Mario has to travel through different levels, overcoming obstacles, jumping on enemies, and collecting items like coins and power-ups (such as mushrooms that make him grow or give him special abilities) to reach his goal.

<img src="../images/mario/2.png">

The games are famous for their fun gameplay, creative worlds, and the challenge of timing jumps and movements just right. Mario has appeared in many different kinds of games, from platformers (like "Super Mario Bros.") to racing games (like "Mario Kart") and sports games (like "Mario Tennis").

<img src="../images/mario/3.png">

I am a huge fan of Super Mario. My favorite game is the 2009 New Super Mario Bros. Wii. In my free time, I like to play the game with my younger brother. I have completed the entire game several times!

<img src="../images/mario/4.png">

<style>
    img {
        width:300px;
        height: auto;
        transition: transform .2s;
    }
    img:hover {
        transform: scale(1.05);
    }
</style>

<script>
    // Function to check the answer
    function checkAnswer(questionNumber, correctOption) {
        const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
        
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === correctOption) {
                alert("✅ Correct!");
            } else {
                alert("❌ Incorrect!");
            }
        } else {
            alert("Please select an answer!");
        }
    }
</script>

<div class="quiz-container">
    <div class="question">
        <p>1. Which of these is a valid variable name?</p>
        <input type="radio" name="q1" value="A">george!<br>
        <input type="radio" name="q1" value="B">P3PPA<br>
        <input type="radio" name="q1" value="C">1_2_3<br>
        <br>
        <button onclick="checkAnswer(1, 'B')">Submit Answer</button>
    </div>
    <div class="question">
        <p>2. What naming convention is this variable name: xbox_controller</p>
        <input type="radio" name="q2" value="A">Snake Case<br>
        <input type="radio" name="q2" value="B">Pascal Case<br>
        <input type="radio" name="q2" value="C">Camel Case<br>
        <br>
        <button onclick="checkAnswer(2, 'A')">Submit Answer</button>
    </div>
    <div class="question">
        <p>3. Which of these is a boolean?</p>
        <input type="radio" name="q3" value="A">"true"<br>
        <input type="radio" name="q3" value="B">False<br>
        <input type="radio" name="q3" value="C">false<br>
        <br>
        <button onclick="checkAnswer(3, 'C')">Submit Answer</button>
    </div>
</div>

<style>
    body {
        background-color: #f4f4f4;
        color: white;
        padding: 20px;
    }
    h2 {
        color: white;
    }
    .quiz-container {
        background-color: #333333;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
    }
    .question {
        margin-bottom: 20px;
    }
    .question p {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .question input {
        margin-right: 10px;
    }
    .question button {
        background-color: #0056b3;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .question button:hover {
        background-color: #003d80;
    }
</style>
