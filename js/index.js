'use strict';

function setup() {
  noCursor();
  background(0);
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  clear();
  background(0);
  noFill();
  Circle.drawAll();
}

function touchEnded() {
  var circle = new Circle(touchX, touchY);
  Circle.map[circle.key] = circle;
}
