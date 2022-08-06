import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export const MatterStepOne = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 1920,
        height: 1080,
        background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(150, 900, 1920, 40, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    });

    const ball = Bodies.circle(450, 0, 30, {
      restitution: 0.9,
      render: {
        fillStyle: 'yellow'
      }
    });

    const ball2 = Bodies.circle(450, 0, 5, {
        restitution: 0.9,
        render: {
            fillStyle: 'blue'
        }
    });

    World.add(engine.world, [floor, ball, ball2]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 300,
        height: 300
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterStepOne