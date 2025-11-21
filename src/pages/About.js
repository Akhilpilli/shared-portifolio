// import config from "../config/constants.json";
import TitleChanger from "../components/TitleChanger";
import Skills from "../components/Skills";
import { Tooltip } from 'react-tooltip';
import "../styles/About.css";

function About({ config }) {
    const skillList = config.skillList;
    const primarySkills = config.primarySkills;
    return (
      <div className="about">
          <div className="about-details">
            <div className="about-description">
              <div className="name-role">
                <div>
                  <h1>{config.name}</h1>
                  <TitleChanger titles={config.jobTitles} />
                </div>
              </div>
              <h3 className="self-description">Experienced software engineer with a strong focus on building scalable, high-performance systems. Passionate about solving complex challenges and delivering solutions that align with business goals.</h3>
              <div className="social-profile">
                {Object.entries(config.scialProfiles).map(([key, link]) => (
                  <a 
                    key={key}
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`profile-link ${key}`}
                    data-tooltip-id={`tooltip-${key}`}
                  >
                    <div className={`logo ${key}`}></div>
                    <Tooltip id={`tooltip-${key}`} place="bottom" content={key} />
                  </a>
                ))}
              </div>
            </div>
            <Skills skills={skillList} primarySkills={primarySkills}/>
          </div>

      </div>
    );
  }
  
  export default About;
  