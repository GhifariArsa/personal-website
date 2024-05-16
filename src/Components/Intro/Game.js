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

    let engine = Engine.create({
      timing: {
        timeScale: 0.7,
      },
    });

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 600,
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
    let objects = [];

    const wall = Bodies.rectangle(-499, 200, 1000, 400, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });
    objects.push(wall);

    const wall2 = Bodies.rectangle(1099, 200, 1000, 400, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });
    objects.push(wall2);

    const floor = Bodies.rectangle(0, 549, 1500, 300, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });
    objects.push(floor);

    const ceiling = Bodies.rectangle(0, -499, 1500, 1000, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });
    objects.push(ceiling);

    const roundedRect = Bodies.rectangle(200, 200, 200, 100, {
      restitution: 0.3,
      chamfer: { radius: 20 }, // Set the radius for rounded corners
      render: {
        fillStyle: "white",
        strokeStyle: "black", // Set the stroke color
        lineWidth: 2, // Set the width of the stroke
      },
    });

    // Push the rounded rectangle into the objects array
    objects.push(roundedRect);

    for (let i = 0; i < 7; i++) {
      objects.push(
        Bodies.circle(100 + i * 20, 0, Math.random() * 40 + 30, {
          restitution: 0.3,
          render: {
            fillStyle: "white",
            strokeStyle: "black",
            lineWidth: 3,
          },
        })
      );
    }

    World.add(engine.world, objects);

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
