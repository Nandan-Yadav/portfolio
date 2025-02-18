
// About.jsx
import React from "react";
import { ABOUT_ME_TITLE, ABOUT_ME_DESCRIPTION, TECHNOLOGIES_TITLE, TECHNOLOGIES_LIST, FUTURE_PROJECTS_TITLE, MATCH_AI_PROJECT_TITLE, MATCH_AI_PROJECT_DESCRIPTION, LOAN_TRACKING_PROJECT_TITLE, LOAN_TRACKING_PROJECT_DESCRIPTION } from "../constants/text";
import "../style/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-title">{ABOUT_ME_TITLE}</h1>
        <p className="about-paragraph">{ABOUT_ME_DESCRIPTION}</p>
        <div className="technologies">
          <h3 className="technologies-title">{TECHNOLOGIES_TITLE}</h3>
          <ul className="technologies-list">
            {TECHNOLOGIES_LIST.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="case-studies">
        <h3 className="case-studies-title">{FUTURE_PROJECTS_TITLE}</h3>

        <div className="case-study">
          <h4 className="case-study-heading">{MATCH_AI_PROJECT_TITLE}</h4>
          <p className="case-study-description">{MATCH_AI_PROJECT_DESCRIPTION}</p>
        </div>

        <div className="case-study">
          <h4 className="case-study-heading">{LOAN_TRACKING_PROJECT_TITLE}</h4>
          <p className="case-study-description">{LOAN_TRACKING_PROJECT_DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
};

export default About;