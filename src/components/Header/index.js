import React from "react";
import "./style.css";
const Header = () => {
    window.addEventListener("hashchange", function () {});

    return (
        <header>
            <nav>
                <ul className="header-directions">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header };
