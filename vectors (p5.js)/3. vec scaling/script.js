class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }
  scale(n) {
    this.x *= n;
    this.y *= n;
  } 
  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
  draw(color) {
    fill(color);
    stroke("white")
    circle(this.x, this.y ,10);
  }
}

let pos = new Vec2(10, 20);
let vel = new Vec2(2, 1);

function setup() {
    createCanvas(windowWidth, windowHeight);
    pos.scale(35);
}

function draw() {
    background("black");
    pos.draw("red");
}