// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=KkyIDI6rQJI

// 1. This is the drop object.

// Drop Vars
// 2. x
// 3. y
// 4. length (Of the line)
//  Random value between 5 and 10
// 5. width (Of the line)
//  Random value between 1 and 2.5
// 6. color (as a p5.js color object)
//  r = 138, g = 43, b = 226
// 7. speed
//  Random value between 5 to 14

// Functions
// 8. fall
// a. Update the rain location by the speed of the drop
// 9. checkBounds
// a. if the rain's y value is off the screen (this.y > height)
// b. Reset the dtop to the top of the screen. (Just off the screen)
// 10. show
// a. set the color of the drop
// b. set the width
// c. draw the drop as a line

function drop() { // 1
  // Vars
  this.pos = createVector(random(width),random(height))
  this.length = random(5, 10); // 4
  this.weight = random(1, 2.5); // 5
  this.color = color(138, 43, 226); // 6
  this.speed = createVector(0,random(5, 14)); // 7

  // Functions
  this.fall = function() { // 8
    this.pos.add(this.speed) // 8.a
  }

  this.checkBounds = function() { // 9
    if (this.pos.y > height) { // 9.a
      this.pos.y = -this.length; // 9.b
    }
  }

  this.show = function() { // 10
    stroke(this.color) // 10.a
    strokeWeight(this.weight); // 10.b
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.length); // 10.c
  }
}
