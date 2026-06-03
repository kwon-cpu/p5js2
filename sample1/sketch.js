function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(15, 10, 35);

  noStroke();

  fill(210, 180, 245, 170);
  ellipse(150, 100, 40, 40);

  fill(185, 150, 255, 170);
  ellipse(220, 160, 50, 50);

  fill(150, 190, 255, 170);
  ellipse(300, 200, 60, 60);

  fill(255, 170, 210, 170);
  ellipse(380, 240, 70, 70);

  fill(255, 210, 150, 170);
  ellipse(450, 300, 80, 80);

  noFill();
  strokeWeight(2);

  stroke(255, 140, 120);
  ellipse(300, 200, 200, 200);

  stroke(180, 140, 255, 120);
  ellipse(300, 200, 260, 260);
}