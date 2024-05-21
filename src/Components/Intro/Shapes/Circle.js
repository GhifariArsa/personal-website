import { Bodies, World } from "matter-js";

export default function Circle(x, y, r, world, p5) {
  this.body = Bodies.circle(x, y, r, { restitution: 0.3 });
  this.r = r * 2;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    p5.push();
    p5.translate(pos.x - p5.width / 2, pos.y - p5.height / 2);
    p5.rotate(angle);
    p5.circle(0, 0, this.r);
    p5.pop();
  };
}
