function bsod() {
  // Create an image element dynamically
  let img = document.createElement("img");
  img.src = "images/bsod.png"; // Path to the image in the images folder
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
  } else if (img.mozRequestFullScreen) {
    // Firefox
    img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) {
    // IE/Edge
    img.msRequestFullscreen();
  }
  var scary = new Audio("assets/audio/error.mp3");
  scary.play();

  // Add an event listener to exit fullscreen on click
  img.addEventListener("click", function () {
    document.exitFullscreen();
    document.body.removeChild(img); // Remove the image after exiting fullscreen
    const content = document.getElementById("content");
  });
}
