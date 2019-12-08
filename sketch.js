function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  push();
  translate(100,100);
  rotate(frameCount / 20.0);
  translate(-100, -100);
  rect(100, 100, 55, 55);
  pop();
fill('rgb(0,255,0)');
  }
