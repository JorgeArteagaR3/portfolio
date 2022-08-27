import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaLinkedinIn,
    FaWhatsapp,
    FaRegCopy,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import "./style.css";
const Contact = () => {
    const socials = [
        {
            Icon: FaLinkedinIn,
            url: "https://www.linkedin.com/in/jorge-arteaga-aranibar-789b28182/",
        },
        {
            Icon: FiGithub,
            url: "https://github.com/JorgeArteagaR3",
        },
        {
            Icon: FaWhatsapp,
            url: "https://api.whatsapp.com/send/?phone=51912893054&text&type=phone_number&app_absent=0",
        },
    ];
    const [isCopied, setIsCopied] = useState(false);
    return (
        <div className="effect contact-container">
            <div className="contact-details">
                <h2>Get In Touch</h2>
                <div className="contact-details__container">
                    <p>Jorge Luis Arteaga Aranibar</p>
                    <p>
                        <FaPhoneAlt />
                        +51 912893054
                    </p>
                    <p>
                        <MdEmail />
                        jorgearteagaaranibar@gmail.com
                        <div
                            className="copy-container"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "jorgearteagaaranibar@gmail.com"
                                );
                                setIsCopied(true);
                            }}
                        >
                            <FaRegCopy className="copy-icon" />
                            <span className="copy-tip">
                                {!isCopied ? "Copy this!" : "Copied!"}
                            </span>
                        </div>
                    </p>
                </div>
                <div className="contact-social">
                    {socials.map((Social, index) => (
                        <a
                            className="social-icon-container"
                            href={Social.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Social.Icon
                                key={index}
                                color={"var(--bgcolor)"}
                                size={20}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Contact };
