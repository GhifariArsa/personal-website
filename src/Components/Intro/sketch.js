import { Engine, Runner, Mouse, MouseConstraint, World } from "matter-js";
import Circle from "./Shapes/Circle.js";
import Ground from "./Shapes/Ground.js";

export function sketch(p5) {
  let engine, world, canvas, ground, wallL, wallR, roof;

  let objects = [];

  p5.setup = () => {
    // Setting canvas
    let w = 650;
    let h = 400;
    canvas = p5.createCanvas(w, h, p5.WEBGL);

    // World and engine setup
    engine = Engine.create();
    world = engine.world;

    // Make the circles random
    for (let i = 0; i < 7; i++) {
      objects.push(new Circle(50 + i * 100, 100, Math.random() * 40 + 40, world, p5));
    }

    // Making the ground, floor, and walls
    ground = new Ground(0, 448, w * 2, 100, world, p5);
    wallL = new Ground(-48, 0, 100, h * 2, world, p5);
    wallR = new Ground(698, 48, 100, h * 2, world, p5);
    roof = new Ground(0, -48, w * 2, 100, world, p5);

    const mouse = Mouse.create(canvas.elt);
    mouse.pixelRatio = p5.pixelDensity();
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
    });
    World.add(world, mouseConstraint);

    Runner.run(engine);
  };

  p5.draw = () => {
    p5.background(255);
    for (let i = 0; i < objects.length; i++) {
      objects[i].show();
    }
    ground.show();
    wallL.show();
    wallR.show();
    roof.show();
  };
}
