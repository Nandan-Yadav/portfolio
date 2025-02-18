import React from "react";
import { MY_PROJECTS } from "../constants/text";
import "../style/Projects.css";

const Projects = () => {
  const projectClass = (index) => (index % 2 === 0 ? "even" : "odd");
  const PROJECT_COLORS = [
    { spanColor: "#FFA217", bgColor: "#FFF6E9" },
    { spanColor: "#000AFF", bgColor: "#D0E6FF" },
    { spanColor: "#00C897", bgColor: "#E9FFF6" },
    { spanColor: "#FF4081", bgColor: "#FFEFF4" },
    { spanColor: "#9C27B0", bgColor: "#F3E5F5" },
  ];

  return (
    <section className="projects-section" id="projects">
      <h1 className="project-heading">Projects</h1>
      {MY_PROJECTS.map((project, index) => (
        <div key={index} className={`project ${projectClass(index)} `}>
          <img
            className="project-img"
            src={project.image}
            alt={`Screenshot of ${project.name}`}
          />
          <div className="project-content">
            <h2 className="project-title">
              {project.name + " "}
            </h2>
            <span
                className="project-sector"
                style={{
                  backgroundColor: PROJECT_COLORS[index].bgColor,
                  color: PROJECT_COLORS[index].spanColor,
                }}
              >
                {project.sector}
              </span>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project"
              style={{
                backgroundColor: PROJECT_COLORS[index].spanColor,

              }}
            >
              View case study &gt;
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
