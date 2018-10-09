function preload() {
  // put preload code here
}

var a = '#d6d6d6';
var b = '#bababa';
var c = '#9e9e9e';
var d = '#878787';
var e = '#777777';
var a1 = '#0005FF';
var b1 = '#00FF2B';
var c1 = '#D9D900';
var d1 = '#FF0009';
var e1 = '#F700FF';

function setup() {
frameRate(6)

createCanvas(windowWidth, windowHeight);

for (var x = 30; x < width; x += 30) {
  for (var y = 30; y < height; y += 30) {

    var r = random(0, 5);
    r = Math.round(r);

    if (r == 1) {
      fill(a);
    }

    if (r == 2) {
      fill(b);
    }

    if (r == 3) {
      fill(c);
    }

    if (r == 4) {
      fill(d);
    }

    if (r == 5) {
      fill(e);
    }

    noStroke();
    rectMode(CENTER);
    rect(x, y, 30, 30);

  }

}

}

function draw() {
  // put drawing code here

  for (var x = 30; x < width; x += 30) {
    for (var y = 30; y < height; y += 30) {

      var r = random(0, 5);
      r = Math.round(r);

      if (r == 1) {
        fill(a1);
      }

      if (r == 2) {
        fill(b1);
      }

      if (r == 3) {
        fill(c1);
      }

      if (r == 4) {
        fill(d1);
      }

      if (r == 5) {
        fill(e1);
      }

      noStroke();
      var r2 = random (5, 27);
      r2 = Math.round(r2);
      ellipse(x,y,r2);

    }

  }

}
