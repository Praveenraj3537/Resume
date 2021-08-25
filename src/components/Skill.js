import React from "react";

const Skillcard = ({skill:{icon, title, about}}) => 

    <div className="col-lg-12">
        <div className="skill_card ">
            <img src={icon} alt="skills" className="skill_card-icon" />
            <div className="skill_card-body">
                <h6 className="skill_card-title">
                    {title}
                </h6>
                <p className="skill_card-content">{about}</p>
            </div>
        </div>
    </div>

export default Skillcard;