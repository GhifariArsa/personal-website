import React, { useEffect, useRef } from "react";
import Matter, { Mouse } from "matter-js";

export default function Game() {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 500,
        height: 400,
        background: "rgba(255, 255, 255, 0.5)",
        wireframes: false,
      },
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);

    // Objects
    const wall = Bodies.rectangle(0, 200, 10, 400, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    const wall2 = Bodies.rectangle(500, 200, 10, 400, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    const floor = Bodies.rectangle(0, 400, 1000, 10, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    const ceiling = Bodies.rectangle(0, 0, 1000, 10, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    const ball = Bodies.circle(100, 0, 50, {
      restitution: 0,
      render: {
        fillStyle: "blue",
      },
    });

    const ball2 = Bodies.circle(120, 0, 34, {
      restitution: 0,
      render: {
        fillStyle: "blue",
      },
    });

    const ball3 = Bodies.circle(150, 0, 23, {
      restitution: 0,
      render: {
        fillStyle: "blue",
      },
    });

    const ball4 = Bodies.circle(300, 0, 23, {
      restitution: 0,
      render: {
        fillStyle: "red",
      },
    });

    const ball5 = Bodies.circle(100, 0, 42, {
      restitution: 0,
      render: {
        fillStyle: "blue",
      },
    });

    World.add(engine.world, [
      floor,
      ball,
      wall,
      wall2,
      ceiling,
      ball2,
      ball3,
      ball4,
      ball5,
    ]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 500,
        height: 500,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
