function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 245, 235);

  let sway = 0; 
  
  fill(80, 50, 40);
  noStroke();
  ellipse(300, 220 + sway, 320, 380);

  stroke(100, 70, 60);
  strokeWeight(2);
  fill(255, 200, 200);
  rect(180, 350, 240, 100, 50);

  fill(255, 240, 225);
  rect(270, 310, 60, 50);

  fill(255, 240, 225);
  stroke(100, 70, 60);
  ellipse(300, 180 + sway, 240, 270);

  noStroke();
  fill(255, 180, 180, 150);
  ellipse(240, 230 + sway, 40, 30);
  ellipse(360, 230 + sway, 40, 30);

  stroke(50);
  strokeWeight(1);
  fill(255);
  ellipse(255, 190 + sway, 45, 35);
  ellipse(345, 190 + sway, 45, 35);

  fill(60, 40, 30);
  circle(255, 190 + sway, 35);
  circle(345, 190 + sway, 35);

  fill(255);
  noStroke();
  circle(262, 183 + sway, 8);
  circle(352, 183 + sway, 8);

  stroke(20, 10, 5);
  strokeWeight(4);
  noFill();
  arc(255, 160 + sway, 60, 25, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(345, 160 + sway, 60, 25, PI + QUARTER_PI, TWO_PI - QUARTER_PI);

  stroke(200, 150, 130);
  strokeWeight(3);
  noFill();
  arc(300, 225 + sway, 20, 10, 0, PI);

  stroke(220, 100, 100);
  fill(255, 160, 160);
  arc(300, 265 + sway, 60, 30, 0, PI, CHORD);

  noStroke();
  fill(200, 200, 200);
  circle(180, 210 + sway, 6);
  circle(420, 210 + sway, 6);

  fill(80, 50, 40);
  noStroke();
  arc(300, 115 + sway, 245, 150, PI, TWO_PI);
}