function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1000, 700);
  angleMode(DEGREES);
  
  noLoop();
}

function draw() {
  background(105,105,105);
  text('Un arbre fractal', width/2, height/2)
  translate(width / 2, height / 1.3);

  branch(100);
}

function branch(len) {
  push();
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(random(-20, -30));
    branch(len * random(0.7, 0.9));
    rotate(random(50, 60));
    branch(len * random(0.7, 0.9));
  }
  else {
    var r = 230 + random(-20, 20);
    var g = 165 + random(-20, 20);
    var b = 20 + random(-20, 20);
    fill(r, g, b, 150);
    noStroke();
    beginShape();
    for (var i = 45; i < 135; i++) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    for (var i = 135; i > 40; i--) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 20;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop();
  
}