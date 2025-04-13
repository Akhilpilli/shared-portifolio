import React, { useEffect, useRef } from "react";
import "../styles/MouseTrail.css";

const MAX_TRAIL_LENGTH = 10;
const MAX_TRAIL_TIME = 300;

const MouseTrail = () => {
  const trailRef = useRef(null);
  const trailPoints = useRef([]);

  useEffect(() => {
    const trailCanvas = trailRef.current;
    const ctx = trailCanvas.getContext("2d");

    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    const handleMouseMove = (e) => {
      trailPoints.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      if (trailPoints.current.length > MAX_TRAIL_LENGTH) {
        trailPoints.current.shift();
      }
    };

    const drawTrail = () => {
      ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
      const now = Date.now();

      const trailColor = getComputedStyle(document.documentElement).getPropertyValue("--trail-color").trim();

      ctx.beginPath();
      for (let i = 0; i < trailPoints.current.length - 1; i++) {
        let opacity = 1 - (now - trailPoints.current[i].time) / MAX_TRAIL_TIME;
        opacity = Math.max(0, opacity);

        ctx.strokeStyle = `rgba(${trailColor}, ${opacity.toFixed(2)})`;
        ctx.moveTo(trailPoints.current[i].x, trailPoints.current[i].y);
        ctx.lineTo(trailPoints.current[i + 1].x, trailPoints.current[i + 1].y);
        ctx.stroke();
      }

      trailPoints.current = trailPoints.current.filter((point) => now - point.time < MAX_TRAIL_TIME);

      requestAnimationFrame(drawTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(drawTrail);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <canvas ref={trailRef} className="mouse-trail-canvas" />;
};

export default MouseTrail;
