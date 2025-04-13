import React, { useState, useEffect } from "react";
import "../styles/MouseClickEffect.css"; // Import the styles

const MouseClickEffect = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
      setClicks((prev) => [...prev, newClick]);

      // Remove effect after animation duration
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 600);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="ripple"
          style={{ left: click.x, top: click.y }}
        />
      ))}
    </>
  );
};

export default MouseClickEffect;
