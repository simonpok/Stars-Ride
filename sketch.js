let stars = [];
let factor = 100;
let speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  speedSlider = createSlider(0, 20, 0, 0.1);
  for (let i = 0; i <= 500; i++) {
    // let factor = 100;
    stars[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(400)
    );
    stars[i].pz = stars[i].z;
  }
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  for (star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;
    let px = star.x / star.pz;
    let py = star.y / star.pz;
    let diameter = map(star.z, 0, 400, 10, 0);
    fill(255);
    noStroke();
    circle(x, y, diameter);
    stroke(255);
    line(x, y, px, py);
    star.pz = star.z;
    star.z -= speedSlider.value();

    if (star.z < 1) {
      star.x = random(-width * factor, width * factor);
      star.y = random(-height * factor, height * factor);
      star.z = 400;
      star.pz = 400;
    }
  }
}
