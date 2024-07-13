import React from 'react';
import Experience from './Experience';
import trak from '../../assets/icons/trak.jpg';
import kle from '../../assets/icons/kle.jfif';
import bvb from '../../assets/icons/bvb.jpg';
import intel from '../../assets/icons/Intel.svg';
import siemens from '../../assets/icons/siemens.jpg';
import nonce from '../../assets/icons/nonce.png';
import ncet from '../../assets/icons/ncet.png';

import { motion } from 'framer-motion';

const Details = () => {
    const experiences = [
        {
            icon: ncet,
            name: "NCET",
            designation: "Assistant Professor",
            duration: "Oct 2023 to Present",
            role: "Assistant Professor"

        },
        {
            icon: siemens,
            name: "Siemens",
            designation: "Research Professional",
            duration: "Nov 2022 to Sep 2023",
            role: "Research Engineer"
        },
        {
            icon: nonce,
            name: "Nonceblox",
            designation: "FullStack Developer",
            duration: "Dec 2021 to Nov 2022",
            role: "Full Stack Developer"
        },
        {
            icon: trak,
            name: "TrakInvest",
            designation: "FullStack Developer",
            duration: "June 2021 to Nov 2021",
            role: "Full Stack Developer"
        },
        {
            icon: kle,
            name: "KLE Technological University",
            designation: "Assistant Professor",
            duration: "Aug 2016 to April 2021",
            role: "Teaching/Research"
        },
        {
            icon: bvb,
            name: "BVB College of Engineering",
            designation: "Teaching Assistant",
            duration: "Aug 2015 to July 2016",
            role: "Teaching/Research"
        },
        {
            icon: intel,
            name: "INTEL India Pvt. Ltd",
            designation: "INTERN",
            duration: "July 2013 to Oct 2014",
            role: "Developer"
        },

    ];


    const details_motion = {
        hidden: {
            y: '-99vh'
        },
        visible: {
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.7,
                type: 'spring'
            }
        }
    }
    return (
        <motion.div className="resume"
            variants={details_motion}
            initial='hidden'
            animate='visible'
        >
            <div className="container resume_container">
                <h5 className="resume_heading">Employement Details</h5>
                <div className="row">
                    {
                        experiences.map(company =>
                            <Experience company={company} />
                        )
                    }
                </div>
                {/* <h5 className="resume_heading">Education Details</h5>
                    <div className="row">
                    {
                        educations.map(company =>
                        <Experience company = {company}/>
                            )
                    }
                </div> */}
            </div>


        </motion.div>
    );

};

export default Details;