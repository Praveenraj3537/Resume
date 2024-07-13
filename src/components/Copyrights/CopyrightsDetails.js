import React from "react";

const CopyrightsDetails = ({copy:{title, registration, year}}) => 

    <div className="col-lg-12">
        <div className="skill_card ">
            <div className="skill_card-body">
                <h6 className="skill_card-title">
                    {title}
                </h6>
                <p className="skill_card-content">{registration}</p>
                <p className="skill_card-content">{year}</p>
            </div>
        </div>
    </div>

export default CopyrightsDetails;