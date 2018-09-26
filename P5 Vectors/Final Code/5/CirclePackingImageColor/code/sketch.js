// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/

// MAXSIZE => The max radius of a circle
// CIRCLESEACHFRAME => The numbers of circles that are spawned each frame
// ATTEMPTS => The nuber of tries to spawn a circle each frame.
// MAX => Max number of circles possible
var MAXSIZE = 15;
var CIRCLESEACHFRAME = 50;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 2000;

// circle => Array to hold the cirlces
// Finished => Var to tell if we have finished packing the space yet
var circles = [];
var finished = false;

var M;
var validArray = [];
function preload() {
  // M = loadImage("https://image.ibb.co/mYwzje/m.jpg");
  // M = loadImage("https://i.postimg.cc/CLFwGyyq/test.jpg");
  // M = loadImage("https://i.postimg.cc/fLsDb1D5/test_Ball.jpg");
  // M = loadImage("https://i.postimg.cc/3xwPtYJP/HUE-16-x-3-color-wheel.png");
  M = loadImage("https://i.postimg.cc/W4N7P6HK/download.jpg");
  // M = loadImage("https://i.postimg.cc/d0GczFgn/Untit-heavenly-blossoming-tree-blue-sky.jpg");
}

function processImage(img) {
  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i+=4) {
    var sum = 0;
    sum += img.pixels[i+0];
    sum += img.pixels[i+1];
    sum += img.pixels[i+2];
    sum /= 3;
    var temp = floor((i/4));
    var tempX = temp % img.width;
    var tempY = floor(temp / img.height);
    var p = createVector(tempX, tempY);
    var tp = createVector(tempX, tempY)
    var validObj = {pos:tp, r:img.pixels[i+0], g:img.pixels[i+1], b:img.pixels[i+2]};
    validArray.push(validObj);
  }
}

// Create the canvas
function setup() {
  createCanvas(500, 500);
  processImage(M);
}

function draw() {
  // Draw the background
  background(0, 0, 0)
  addCircles();

  // For each circle update, grow, and show.
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircles() {
  // circlesThisFrame keeps track of how many circles have sucessfully been spwaned this frame.
  // attemptsToAddCircle keepts track of how many attempts to add a circle have been made.
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  // If the number of cirlcs is less than the max and we are not finished then ->
  if (circles.length < MAX && !finished) {
    // While the # of circles this frame < CIRCLESEACHFRAME
    while (circlesThisFrame < CIRCLESEACHFRAME) {
      // inc attempts
      attemptsToAddCircle++;
      // If we sucessfully add a circle then inc circlesThisFrame
      if (addCircle()) {
        circlesThisFrame++;
      }
      // If we try too many times (attemptsToAddCircle > ATTEMPTS)
      // Then we are done trying to pack circles
      if (attemptsToAddCircle > ATTEMPTS) {
        finished = true;
        // Break from while loop
        break;
      }
    }
  }
}
