import React, { useState } from "react";

const Orb = ({ text, Icon, color }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            onMouseOver={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
            className="orb"
        >
            <p className="orb__text">{text}</p>
            <Icon color={isHover ? color : "var(--textcolor)"} size="8rem" />
        </div>
    );
};

export { Orb };
