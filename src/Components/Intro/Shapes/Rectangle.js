import { Bodies, World } from "matter-js";

export default class Rectangle {
  constructor(x, y, w, h, world, p5, options = {}) {
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.p5 = p5;
    this.options = options;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    const p5 = this.p5;

    p5.push();
    p5.translate(pos.x - p5.width / 2, pos.y - p5.height / 2);
    p5.rotate(angle);
    p5.rectMode(p5.CENTER);
    p5.noStroke();
    p5.fill(this.options.fillStyle || "white");
    p5.rect(0, 0, this.w, this.h);
    p5.pop();
  }
}
