import Rectangle from "./Rectangle.js";

export default class Ground extends Rectangle {
  constructor(x, y, w, h, world, p5) {
    const options = {
      isStatic: true,
    };

    super(x, y, w, h, world, p5, options);
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
    p5.fill("black");
    p5.rect(0, 0, this.w, this.h);
    p5.pop();
  }
}
