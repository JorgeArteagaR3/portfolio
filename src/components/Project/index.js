import React from "react";
import "./style.css";
const Project = ({
  title,
  image,
  description,
  code,
  website,
  technologies,
}) => {
  return (
    <div className="project">
      <a
        target="_blank"
        className="project__image-container"
        href={website}
        rel="noopener noreferrer"
      >
        <img src={image} alt={description} />
      </a>
      <div className="project-detail">
        <h3>{title}</h3>
        <div className="project__details">
          <p>{description}</p>
          <div className="project__details-links">
            <a
              rel="noopener noreferrer"
              href={website}
              target="_blank"
              className="project__details--website"
            >
              View here
            </a>
            <a
              rel="noopener noreferrer"
              href={code}
              target="_blank"
              className="project__details--code"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-detail__technologies">
          <h4>Tecnologies Used:</h4>
          <div className="technologies">
            {technologies.map((Item, index) => (
              <Item size="60px" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Project };
