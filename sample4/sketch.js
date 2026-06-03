function setup() {
  createCanvas(600, 400);
  "saveGif('dreamcircle',5)"
}

function draw() {
  background(15, 10, 35, 40);

  noStroke();

  fill(
    180 + 75 * sin(frameCount * 0.02),
    120 + 80 * sin(frameCount * 0.03 + 2),
    220 + 35 * sin(frameCount * 0.04 + 4),
    170
  );
  ellipse(
    width / 2 + sin(frameCount * 0.02) * 150,
    height / 2 + cos(frameCount * 0.03) * 100,
    40,
    40
  );

  fill(
    180 + 75 * sin(frameCount * 0.02 + 1),
    120 + 80 * sin(frameCount * 0.03 + 3),
    220 + 35 * sin(frameCount * 0.04 + 5),
    170
  );
  ellipse(
    width / 2 + sin(frameCount * 0.02 + 1) * 150,
    height / 2 + cos(frameCount * 0.03 + 1) * 100,
    50,
    50
  );

  fill(
    180 + 75 * sin(frameCount * 0.02 + 2),
    120 + 80 * sin(frameCount * 0.03 + 4),
    220 + 35 * sin(frameCount * 0.04 + 6),
    170
  );
  ellipse(
    width / 2 + sin(frameCount * 0.02 + 2) * 150,
    height / 2 + cos(frameCount * 0.03 + 2) * 100,
    60,
    60
  );

  fill(
    180 + 75 * sin(frameCount * 0.02 + 3),
    120 + 80 * sin(frameCount * 0.03 + 5),
    220 + 35 * sin(frameCount * 0.04 + 7),
    170
  );
  ellipse(
    width / 2 + sin(frameCount * 0.02 + 3) * 150,
    height / 2 + cos(frameCount * 0.03 + 3) * 100,
    70,
    70
  );

  fill(
    180 + 75 * sin(frameCount * 0.02 + 4),
    120 + 80 * sin(frameCount * 0.03 + 6),
    220 + 35 * sin(frameCount * 0.04 + 8),
    170
  );
  ellipse(
    width / 2 + sin(frameCount * 0.02 + 4) * 150,
    height / 2 + cos(frameCount * 0.03 + 4) * 100,
    80,
    80
  );

  noFill();
  stroke(255, 140, 120);
  strokeWeight(2);
  ellipse(300, 200, 200 + sin(frameCount * 0.05) * 30);

  stroke(180, 140, 255, 120);
  ellipse(300, 200, 260, 260);
}