import React from "react";
import git from "../assets/icons/github.svg";

const ProjectDetails = ({
  project: { name, image, github_url, description },
}) => {
  return (
    <div className="projectDetails col-md-6 col-lg-4 my-3">
      <figure className="projectDetails_wrapper">
        <a href={github_url} target="_blank">
          <img src={image} alt={name} className="projectDetails_image" />
        </a>
        <div className="projectDetails_title">
          <a href={github_url} target="_blank">
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
