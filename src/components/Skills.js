import React from "react";
import "../styles/Skills.css";

const Skills = ({ skills }) => {
  return (
    <section className="skills-wrapper">
      <h2 className="skills-title">Skills</h2>
      <div className="skills">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div className="skill-section" key={index}>
            <h3 className="skill-category">{category.replace(/_/g, " ")}</h3>
            <div className="skill-list">
              {skillList.map((skill, i) => (
                <span key={i} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
