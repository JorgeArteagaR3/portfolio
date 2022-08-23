import React from "react";
import "./style.css";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiBootstrap } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { Orb } from "../Orb";
const Skills = () => {
    const skills = [
        { text: "HTML", Icon: AiOutlineHtml5, color: "#fc490b" },
        { text: "CSS", Icon: SiCss3, color: "#264de4" },
        { text: "Sass", Icon: DiSass, color: "#cf649a" },
        { text: "Bootstrap", Icon: SiBootstrap, color: "#712cf9" },
        { text: "Javascript", Icon: SiJavascript, color: "#fcdc00" },
        { text: "React", Icon: DiReact, color: "#61dafb" },
        { text: "Git", Icon: FaGitAlt, color: "#f44d27" },
    ];
    return (
        <div className="skills effect">
            <h2>My Skills</h2>
            <div className="marquee">
                <div className="marquee--inner">
                    <span>
                        {skills.map((skill) => (
                            <Orb
                                text={skill.text}
                                Icon={skill.Icon}
                                color={skill.color}
                            />
                        ))}
                    </span>
                    <span>
                        {skills.map((skill) => (
                            <Orb
                                text={skill.text}
                                Icon={skill.Icon}
                                color={skill.color}
                            />
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export { Skills };
