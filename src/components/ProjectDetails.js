import React from "react";
import git from "../assets/icons/github.svg";

const ProjectDetails = ({
  project: { name, image, github_url, description },
}) => {
  return (
    <div className="projectDetails col-md-5 col-lg-4 ">
      <figure className="projectDetails_wrapper">
        <a href={github_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="projectDetails_image" />
        </a>
        <div className="projectDetails_title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <img src={git} alt="github link" className="projectDetails_icon" />
          </a>
          {name}
        </div>
        <div className="projectDetails_details">
          <p>{description}</p>
        </div>
      </figure>
    </div>
  );
};

export default ProjectDetails;
