import React, { useState } from "react";
import "./style.css";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
const Header = () => {
    const [menu, setMenu] = useState(true);
    const closeMenu = () => setMenu(!menu);
    const options = ["home", "skills", "projects", "contact"];
    return (
        <header>
            <nav className={menu && "inactive"}>
                <ul
                    className={
                        !menu
                            ? "header-directions"
                            : "header-directions dissapear"
                    }
                >
                    {options.map((item) => (
                        <li>
                            <a onClick={closeMenu} href={"#" + item}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {menu ? (
                <FiMenu
                    onClick={closeMenu}
                    className="menu"
                    size={20}
                    color={"var(--textcolor)"}
                />
            ) : (
                <GrClose
                    className="menu"
                    size={20}
                    color={"var(--textcolor)"}
                    onClick={closeMenu}
                />
            )}
        </header>
    );
};

export { Header };
