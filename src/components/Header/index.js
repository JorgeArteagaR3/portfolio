import React from "react";
import "./style.css";
const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-directions">
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export { Header };
