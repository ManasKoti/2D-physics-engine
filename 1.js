class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
  
  draw(color) {
    fill(color);
    line(0, 0, this.x, this.y);
    stroke("white")
    circle(this.x, this.y ,10);
  }
}

let pos = new Vec2(10, 20);

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("black");
    pos.x = mouseX;
    pos.y = mouseY;
    pos.draw("red");
    console.log(pos.mag());
}