import { skillsData } from "../constants/text";
import "../style/Skills.css"

 const Skills = () => {
  return (
    <section className="skills-section" id="skills">
        <h1 className="skills-heading">Skills</h1>
      {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <span dangerouslySetInnerHTML={{ __html: skill.icon }}></span>
          <p>{skill.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
