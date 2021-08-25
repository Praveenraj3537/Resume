import React from 'react';
import git from '../assets/icons/github.svg';

const ProjectDetails = ({project:{name, image, github_url}}) => {
    return (
        <div className="projectDetails col-md-6 col-lg-4 my-2">
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
            </figure>
        </div>
    );
}

export default ProjectDetails;
