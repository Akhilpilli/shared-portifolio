import React, { useState, useEffect } from "react";

const TitleChanger = ({titles}) => {
//   const titles = ["Developer", "Designer", "Engineer", "Freelancer"]; // List of Titles
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <h1 className="job-title-details">
      <span className="job-title">{titles[index]}</span>
    </h1>
  );
};

export default TitleChanger;
