---
layout: page
title: Fun Stuff 😄
permalink: /fun-stuff/
---

<br>

### Cookie Clicker

<br>
<p>Please do not <span class="bake" onclick="bake()">bake</span> any more than 50 cookies. A cookie virus will be installed if you do. 🍪</p>

<img id="cookie" class="cookie" src="../images/cookie.png" onclick="increaseCount()">

<p>Cookies: <span id="cookieCount">0</span></p>

<button id="reset" onclick="reset()">Reset cookie count</button>

<script src="../assets/js/cookie.js"></script>

<hr>

<br>

### Random Link Generator

<br>
<p>You have switched the link <span id="count">0</span> time<span id="s">s</span>.</p>
<a id="switch" href="https://google.com" target="_blank">Random link</a>

<button onclick="switchLink()">Click here to switch the link!</button>

<script src="../assets/js/link.js"></script>

<hr>

<br>

### Calculator

<br>

<div class="input-container">
    <input type="number" id="num1" placeholder="Enter first number">
    <select id="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
        <option value="power">Power</option>
        <option value="modulo">Modulo</option>
    </select>
    <input type="number" id="num2" placeholder="Enter second number">
</div>
<br>
<button onclick="calculate()">Calculate!</button>
<p>Result: <span id="result"></span></p>
<script src="../assets/js/calculator.js"></script>

<style>
.cookie:hover {
    cursor: grabbing;
}
.bake:hover {
    cursor: pointer;
}
hr {
    border-top: 3px solid #bbb;
}

input, select {
    padding: 5px;
    border-radius:10px;
    border:none;
    background-color: #A2CFFE;
}

::placeholder {
    color: black;
}


</style>
