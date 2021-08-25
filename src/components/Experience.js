import React from 'react';

const Experience = ({company:{icon, name, designation, duration, role}}) => 

    <div className="col-lg-6">
        <div className="skill_card">
            <img src={icon} alt="experience" className="skill_card-icon" />
            <div className="skill_card-body">
                <h6 className="skill_card-title">
                    {name}
                </h6>
                <p className="skill_card-content">{designation}</p>
                <p className="skill_card-content">{duration}</p>
                <p className="skill_card-content">{role}</p>
            </div>
        </div>
    </div>


export default Experience;
