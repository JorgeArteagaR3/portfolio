import React from "react";
import "./style.css";
import { DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { SiBootstrap, SiTypescript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { Orb } from "../Orb";

const Skills = () => {
  const skills = [
    { text: "HTML", Icon: DiHtml5, color: "#fc490b" },
    { text: "CSS", Icon: DiCss3, color: "#264de4" },
    { text: "Sass", Icon: DiSass, color: "#cf649a" },
    { text: "Bootstrap", Icon: SiBootstrap, color: "#712cf9" },
    { text: "JavaScript", Icon: IoLogoJavascript, color: "#fcdc00" },
    { text: "React", Icon: DiReact, color: "#61dafb" },
    { text: "Git", Icon: FaGitAlt, color: "#f44d27" },
    { text: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  ];

  return (
    <div className="skills effect" id="skills">
      <h2>My Skills</h2>
      <div className="marquee">
        <div className="marquee--inner">
          <span>
            {skills.map((skill) => (
              <Orb
                text={skill.text}
                Icon={skill.Icon}
                color={skill.color}
                key={skill.text}
              />
            ))}
          </span>
          <span>
            {skills.map((skill, index) => (
              <Orb
                text={skill.text}
                Icon={skill.Icon}
                color={skill.color}
                key={index + skill.text}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Skills };
