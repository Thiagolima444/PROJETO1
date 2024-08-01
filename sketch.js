function setup() {
  createCanvas(1000, 800);
background("rgb(3,255,223)");
}

function draw() {
  
  fill("rgb(10,10,10)");
  stroke("lightblue");
  if (mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
