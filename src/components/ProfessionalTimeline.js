import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import config from "../config/constants.json";
import "react-vertical-timeline-component/style.min.css"; // Correct CSS import
import "../styles/ProfessionalTimeline.css"; // Your custom styles

const ProfessionalTimeline = ({ config }) => {
  return (
    <div className="professional-timeline" style={{ margin: "50px" }}>
  <h2 className="professional-timeline-title">Professional Journey</h2>
  <VerticalTimeline>
    {config.professionalExperience.map((experience, index) => (
      <div key={index}>
        <VerticalTimelineElement
          date={experience.duration}
          position="rigth"
          iconStyle={{ background: "var(--secondary-color)", color: "#fff" }}
          icon={<i className="fa fa-briefcase" />} 
          lineColor={"var(--secondary-color)"}
        >
          {experience.project.map((project, projectIndex) => (
            <div>
                <h4 className="vertical-timeline-element-title project-title">{project.name}</h4>
                <ul>
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
            </div>
          ))}
          
          <h3 className="vertical-timeline-element-title">
            {experience.company} - {experience.role}
          </h3>
        </VerticalTimelineElement>
      </div>
    ))}
  </VerticalTimeline>
</div>
  );
};

export default ProfessionalTimeline;
