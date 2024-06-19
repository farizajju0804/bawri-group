// FallingRectangles.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FallingRectangles = () => {
  const sceneRef = useRef(null);
  const observerRef = useRef(null);
  const hasDropped = useRef(false); // To ensure dropRectangles is called only once

  useEffect(() => {
    // create an engine
    const engine = Matter.Engine.create();
    const { world } = engine;

    // create a renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#ffffff'
      }
    });

    // create ground
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 75, window.innerWidth, 50, {
      isStatic: true,
      render: {
        visible: false
      }
    });
    Matter.World.add(world, ground);

    // function to create a falling rectangle
    const createRectangle = (x, y, width, height, texture) => {
      const rectangle = Matter.Bodies.rectangle(x, y, width, height, {
        render: {
          sprite: {
            texture: texture,
            xScale: width / 150,
            yScale: height / 150
          }
        }
      });
      Matter.World.add(world, rectangle);
    };

    // Determine x positions based on screen size
    const isMobile = window.innerWidth < 768;
    const xPercentages = isMobile ? [50, 50, 50, 50] : [60, 40, 60, 40];

    // Convert percentages to pixel values
    const xPositions = xPercentages.map(percent => (window.innerWidth * percent) / 100);

    // Delayed rectangle drops with textures
    const dropRectangles = () => {
      const rectangles = [
        { x: xPositions[0], y: -100, width: 100, height: 100, texture: 'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/left2_k9o9wo.png' },
        { x: xPositions[1], y: -100, width: 100, height: 100, texture: 'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/right2_kezpk3.png' },
        { x: xPositions[2], y: -100, width: 100, height: 100, texture: 'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/left1_knayej.png' },
        { x: xPositions[3], y: -100, width: 100, height: 100, texture: 'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807790/Bawri%20Group/company-logos/right1_sthu5b.png' },
      ];

      rectangles.forEach((rect, index) => {
        setTimeout(() => {
          createRectangle(rect.x, rect.y, rect.width, rect.height, rect.texture);
        }, index * 2000); // Delay each drop by 2 seconds
      });
    };

    // add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    Matter.World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // Prevent dragging out of bounds
    Matter.Events.on(mouseConstraint, 'mousedown', (event) => {
      const { body } = event;
      if (body) {
        Matter.Events.on(mouseConstraint, 'mousemove', () => {
          if (body.position.x < 0) {
            Matter.Body.setPosition(body, { x: 0, y: body.position.y });
          } else if (body.position.x > window.innerWidth) {
            Matter.Body.setPosition(body, { x: window.innerWidth, y: body.position.y });
          }
          if (body.position.y < 0) {
            Matter.Body.setPosition(body, { x: body.position.x, y: 0 });
          } else if (body.position.y > window.innerHeight) {
            Matter.Body.setPosition(body, { x: body.position.x, y: window.innerHeight });
          }
        });
      }
    });

    // run the engine
    Matter.Engine.run(engine);

    // run the renderer
    Matter.Render.run(render);

    // Intersection Observer to trigger dropRectangles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasDropped.current) {
          dropRectangles();
          hasDropped.current = true; // Ensure it only drops once
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // Clean up
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
      <h1 style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '48px',
        fontWeight: 'normal',
        fontFamily: 'Skywalks',
        color: '#262626',
        textAlign: 'center'
      }}>
        25+ Companies
      </h1>
      <div ref={observerRef}>
        <div ref={sceneRef} style={{ width: '50%', height: '50%' }} />
      </div>
    </div>
  );
};

export default FallingRectangles;
