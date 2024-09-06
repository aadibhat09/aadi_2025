---
layout: page
title: Cookie Clicker
permalink: /cookie-clicker/
---
<br>
<p>Please do not bake any more than 50 cookies. A cookie virus will be installed if you do. 🍪</p>

<img class="cookie" src="../images/cookie.png" onclick="increaseCount()">

<p>Cookies: <span id="cookieCount">0</span></p>

<button id="reset" onclick="reset()">Reset cookie count</button>

<script>

if (localStorage.getItem('count') == null) {
    localStorage.setItem('count', '0');
} else {
    document.getElementById("cookieCount").innerText = localStorage.getItem('count');
}
function reset() {
    localStorage.setItem('count', '0');
    document.getElementById("cookieCount").innerText = localStorage.getItem('count');
}
function increaseCount() {
    if (parseInt(localStorage.getItem("count")) == 50) {
        openImageFullscreen();
    }else {
        var scream = new Audio("../assets/audio/scream.mp3");
        scream.play();
        localStorage.setItem('count', (parseInt(localStorage.getItem('count')) + 1).toString())
        document.getElementById("cookieCount").innerText = localStorage.getItem('count');
    }

}
function openImageFullscreen() {
    // Create an image element dynamically
    let img = document.createElement("img");
    img.src = "../images/bsod.png"; // Path to the image in the images folder
    img.style.width = "100%"; // Full width for fullscreen effect
    img.style.height = "100%"; // Full height for fullscreen effect
    img.style.position = "fixed"; // Fixed position for fullscreen
    img.style.top = 0;
    img.style.left = 0;

    // Append the image to the body
    document.body.appendChild(img);
    
    // Request fullscreen
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.mozRequestFullScreen) { // Firefox
        img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE/Edge
        img.msRequestFullscreen();
    }
    var scary = new Audio("../assets/audio/error.mp3");
    scary.play();

    // Add an event listener to exit fullscreen on click
    img.addEventListener("click", function() {
        document.exitFullscreen();
        document.body.removeChild(img); // Remove the image after exiting fullscreen
        const content = document.getElementById('content');
    });
}

</script>

<style>
.cookie:hover{
    cursor: pointer;
}


</style>
