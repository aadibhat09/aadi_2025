---
layout: base
title: Student Home
description: Home Page
hide: true
image: /images/mario_animation.png
---

# Hello!

<br>
<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->

{% include nav/home.html %}

<!--- Concatenation of site URL to frontmatter image  --->

{% assign sprite_file = site.baseurl | append: page.image %}

<!--- Has is a list variable containing mario metadata for sprite --->

{% assign hash = site.data.mario_metadata %}

<!--- Size width/height of Sprit images --->

{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

/_CSS style rules for the id and class of the sprite...
_/
.sprite {
height: {{pixels}}px;
width: {{pixels}}px;
background-image: url('{{sprite_file}}');
background-repeat: no-repeat;
}

/_background position of sprite element
_/
#mario {
background-position: calc({{animations[0].col}} _ {{pixels}} _ -1px) calc({{animations[0].row}} _ {{pixels}}_ -1px);
}
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

My name is Aadi. I am a sophomore at Del Norte High School and I am taking AP Computer Science Principles.

Mario is an Italian plumber who goes through several insane adventures to save Princess Peach. Today, he is stuck on this webpage. Please use your arrow keys to help Mario escape this website and continue to save the Princess!

<div class="dropdown">
  <button class="dropbtn">Buttons</button>
  <div class="dropdown-content">
    <button><a href="posts/about-me">Click here to see my new post about me!</a></button>
    <button><a href="posts/mario">Click to see my new post about Mario!</a></button>
    <button><a href="posts/python-functions">Click here to see my new post about Python functions!</a></button>
    <button onclick="bsod()">Click here for $1,000,000!</button>
  </div>
</div>
<br>

<img src="images/cat.gif">

<style>
  button a{
    color:black;

  }
  button a:hover{
    color:black;
    text-decoration:none;
  }
  .dropbtn {
    background-color: #A2CFFE;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius:10px;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover, button:hover {background-color: #ddd;}

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {display: block;}

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>

<script src="assets/js/bsod.js"></script>

<div id="comments"></div>
<script src="https://utteranc.es/client.js"
        repo="aadibhat09/aadi_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
