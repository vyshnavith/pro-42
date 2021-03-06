var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,800);
 angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(400, 400);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(6);
  line(0, 0, 200, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(6);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(6);
  line(0, 0, 100, 0);
  pop();
  
}