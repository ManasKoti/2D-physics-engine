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
  normalise() {
    let len = this.mag();
    this.x /= len;
    this.y /= len;
  }
  rotate(angle) {
    let result = new Vec2(0, 0);
    result.x = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
    result.y = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));
    return result;
  }
  draw(color) {
    fill(color);
    stroke("white")
    circle(this.x, this.y ,10);
  }
}

class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
  static add(a, b) {
    let result = new Vec3(0, 0, 0);
    result.x = a.x + b.x;
    result.y = a.y + b.y;
    result.z = a.z + b.z;
    return result;
  }
  static sub(a, b) {
    let result = new Vec3(0, 0, 0);
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    result.z = a.z - b.z;
    return result;
  }
  scale(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }
  dot(v) {
    return ((this.x * v.x) + (this.y * v.y) + (this.z * v.z));
  }
  cross(v) {
    let result = new Vec3(0, 0, 0);
    result.x = (this.y * v.z) - (this.z * v.y);
    result.y = (this.z * v.x) - (this.x * v.z);
    result.z = (this.x * v.y) - (this.y * v.x);
    return result;
  }
  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
  }
  normalise() {
    let len = this.mag();
    this.x /= len;
    this.y /= len;
    this.z /= len;
  }
}

let pos = new Vec2(100, 0);
let vel = new Vec2(1, 2);
let angle = 0.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2);
  background("black");
  let rotatedPos = pos.rotate(angle);
  rotatedPos.draw("red");
  angle += 0.01;
}