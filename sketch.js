function setup() {
  createCanvas(1000, 800);
  background("white");
}

function draw() {
  
  stroke("green");
  fill("green");

  if (mouseIsPressed) {
    circle(mouseX, mouseY, 50, 60);
  }
}
