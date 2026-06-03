let blush = 0;
let heart = false;
let mouthMode = 0;
let blink = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 245, 235);

  let sway = sin(frameCount * 0.05) * 5;
  let eyeOffsetX = map(mouseX, 0, width, -6, 6);
  let eyeOffsetY = map(mouseY, 0, height, -4, 4);

  if (blush > 0) {
    blush -= 2;
  }

  if (blink > 0) {
    blink--;
  }

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
  fill(255, 180, 180, 150 + blush);
  ellipse(240, 230 + sway, 40 + blush * 0.1, 30 + blush * 0.1);
  ellipse(360, 230 + sway, 40 + blush * 0.1, 30 + blush * 0.1);

  stroke(50);
  strokeWeight(1);
  fill(255);

  if (blink > 0) {
    line(233, 190 + sway, 277, 190 + sway);
    line(323, 190 + sway, 367, 190 + sway);
  } else {
    ellipse(255, 190 + sway, 45, 35);
    ellipse(345, 190 + sway, 45, 35);

    fill(60, 40, 30);
    circle(255 + eyeOffsetX, 190 + sway + eyeOffsetY, 35);
    circle(345 + eyeOffsetX, 190 + sway + eyeOffsetY, 35);

    fill(255);
    noStroke();
    circle(262 + eyeOffsetX, 183 + sway + eyeOffsetY, 8);
    circle(352 + eyeOffsetX, 183 + sway + eyeOffsetY, 8);
  }

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

  if (mouthMode === 0) {
    arc(300, 265 + sway, 60, 30, 0, PI, CHORD);
  } else {
    ellipse(300, 265 + sway, 35, 45);
  }

  noStroke();
  fill(200, 200, 200);
  circle(180, 210 + sway, 6);
  circle(420, 210 + sway, 6);

  fill(80, 50, 40);
  noStroke();
  arc(300, 115 + sway, 245, 150, PI, TWO_PI);

  if (heart) {
    fill(255, 120, 150, 220);

    circle(460, 100, 18);
    circle(475, 100, 18);
    triangle(450, 105, 485, 105, 467.5, 130);

    circle(500, 70, 14);
    circle(512, 70, 14);
    triangle(490, 74, 522, 74, 506, 96);

    circle(120, 90, 16);
    circle(134, 90, 16);
    triangle(110, 95, 144, 95, 127, 118);
  }

  noStroke();
  fill(120, 90, 90);
  textSize(14);
  text("mouse: eyes follow, click: heart / b: blink / m: mouth change", 80, 25);
}

function mousePressed() {
  blush = 100;
  heart = !heart;
}

function keyPressed() {
  if (key === 'b' || key === 'B') {
    blink = 12;
  }

  if (key === 'm' || key === 'M') {
    if (mouthMode === 0) {
      mouthMode = 1;
    } else {
      mouthMode = 0;
    }
  }
}
