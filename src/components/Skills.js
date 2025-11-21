import React, { useState } from "react";
import "../styles/Skills.css";

const Skills = ({ skills, primarySkills = [] }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="skills-wrapper">
      <h2 className="skills-title">Skills</h2>

      {/* Top/Headline Skills Row */}
      {!showAll && ( 
        <div className="skills-section">
          <span
            className="skills-toggle-btn"
            tabIndex={0}
            role="button"
            onClick={() => setShowAll(true)}
            onKeyPress={e => { if (e.key === "Enter") setShowAll(true); }}
          >
            {/* Explore All Technologies I’ve Used */}
            Show Full Skill List
          </span>
          <div className="headline-skills">
            {primarySkills.map((skill, i) => (
              <span key={i} className="skill-item headline">{skill}</span>
            ))}
          </div>
          
        </div>
      )}

      {showAll && (
        <>
          <div className="skills-section">
            <div></div>
            {/* <span className="skills-note">
              Yes, it’s a lot. No, I’m not bluffing—I can tell you how I’ve leveraged each one if you’re curious!
            </span> */}
            <span
              className="skills-toggle-btn"
              tabIndex={0}
              role="button"
              onClick={() => setShowAll(false)}
              onKeyPress={e => { if (e.key === "Enter") setShowAll(false); }}
            >
              Hide Full Skill List
            </span>
          </div>
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
        </>
      )}
    </section>
  );
};

export default Skills;
