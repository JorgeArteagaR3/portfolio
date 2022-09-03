import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css/effect-flip";
import { Project } from "../Project/index";
import "swiper/css";
import "./style.css";
import "swiper/css/pagination";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { DiSass } from "react-icons/di";

const Projects = () => {
    const myprojects = [
        {
            title: "MasterMind",
            image: "https://i.imgur.com/l2NvHur.jpg",
            description: "An E-commerce application for buying clothes.",
            code: "https://github.com/JorgeArteagaR3/ecommerce-app",
            website: "https://ecommerce-app-two-zeta.vercel.app/",
            technologies: [DiReact, SiCss3],
        },
        {
            title: "Country App Finder",
            image: "https://i.imgur.com/mdcyVxH.jpg",
            description: "An app to find any country information.",
            code: "https://github.com/JorgeArteagaR3/react-country-app",
            website: "https://react-country-app-seven.vercel.app/",
            technologies: [DiReact, SiCss3],
        },
        {
            title: "Movie Stats",
            image: "https://i.imgur.com/VunqSn0.jpg",
            description:
                "A Single Page App that recommends movies to users based on their personal choice.",
            code: "https://github.com/JorgeArteagaR3/themoviedb-api-project",
            website: "https://themoviedb-api-project.vercel.app/",
            technologies: [AiOutlineHtml5, DiSass, SiJavascript],
        },
        {
            title: "To Do App",
            image: "https://i.imgur.com/XQVaCKD.jpg",
            description:
                "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.",
            code: "https://github.com/JorgeArteagaR3/to-do-app",
            website: "https://to-do-app-orpin-six.vercel.app/",
            technologies: [DiReact, SiCss3],
        },
    ];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className="projects effect" id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <Swiper
                    modules={[Pagination, Mousewheel]}
                    slidesPerView={1}
                    spaceBetween={250}
                    mousewheel={true}
                    speed={1000}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop
                    pagination={pagination}
                >
                    {myprojects.map((project, index) => (
                        <SwiperSlide key={project.title}>
                            <Project
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                code={project.code}
                                website={project.website}
                                technologies={project.technologies}
                                key={project.title + index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export { Projects };
