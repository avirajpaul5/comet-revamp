import React, { useEffect, useRef } from "react";
import "../../Styles/CustomCursor.css";

const CustomCursor = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    const dots = [];
    const mouse = { x: 0, y: 0 };

    for (let i = 0; i < 250; i++) {
      const div = document.createElement("div");
      div.className = "trail";
      document.body.appendChild(div);
      dots.push({ node: div, x: 0, y: 0 });
      trailRef.current.push(div);
    }

    const draw = () => {
      let x = mouse.x;
      let y = mouse.y;

      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.node.style.left = `${dot.x}px`;
        dot.node.style.top = `${dot.y}px`;
        x += (nextDot.x - dot.x) * 0.03;
        y += (nextDot.y - dot.y) * 0.03;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trailRef.current.forEach((div) => document.body.removeChild(div));
    };
  }, []);

  return null;
};

export default CustomCursor;