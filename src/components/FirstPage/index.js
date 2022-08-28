import React from "react";
import { AboutMe } from "../AboutMe";
import "./style.css";
const FirstPage = () => {
    return (
        <div className="first-page effect" id="home">
            <div className="hero">
                <div className="hero-text">
                    <h1>
                        Hi, I'm <br /> Jorge Arteaga
                    </h1>
                    <p>Front End Developer & Industrial Engineer</p>
                </div>
                <AboutMe />
            </div>
        </div>
    );
};

export { FirstPage };
