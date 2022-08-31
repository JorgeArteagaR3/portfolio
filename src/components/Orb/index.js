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
            <Icon
                className="orb-icon"
                color={isHover ? color : "var(--textcolor)"}
            />
        </div>
    );
};

export { Orb };
