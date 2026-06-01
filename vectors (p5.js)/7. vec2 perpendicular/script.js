class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  cross(v) {
    let result = new Vec3(0, 0, 0);
    result.x = (this.y * v.z) - (this.z * v.y);
    result.y = (this.z * v.x) - (this.x * v.z);
    result.z = (this.x * v.y) - (this.y * v.x);
    return result;
  }
}

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
  static add(a, b) {
    let result = new Vec2(0, 0);
    result.x = a.x + b.x;
    result.y = a.y + b.y;
    return result;
  }
  static sub(a, b) {
    let result = new Vec2(0, 0);
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    return result;
  }
  scale(n) {
    this.x *= n;
    this.y *= n;
  } 
  dot(v) {
    return ((this.x * v.x) + (this.y * v.y));
  }
  perp() {
    let result = new Vec2(0, 0);
    result.x = -this.y;
    result.y = this.x;
    return result;
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
let pos2 = new Vec3(1, 2, 3);
let pos3 = new Vec3(4, 5, 6);

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("black");
    pos.draw("red");
    console.log(pos2.cross(pos3));
}