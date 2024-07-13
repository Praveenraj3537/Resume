import React from 'react';
import sainik from '../../assets/icons/sainik.png';
import uvce from '../../assets/icons/uvce.jfif';
import bms from '../../assets/icons/bms.png';
import { motion } from 'framer-motion';
import Experience from '../Experience/Experience';

const Education = () => {
    const educations = [
        {
            icon: bms,
            name: "BMS College of Engineering",
            designation: "M.Tech(CSE)",
            duration: "Aug 2013 to July 2015",
        },
        {
            icon: uvce,
            name: "University Visvesvaraya College of Engineering",
            designation: "B.E(ISE)",
            duration: "Aug 2007 to July 2012",
        },
        {
            icon: sainik,
            name: "Sainik School Bijapur",
            designation: "12th",
            duration: "Aug 2006 to July 2007",
        },
        {
            icon: sainik,
            name: "Sainik School Bijapur",
            designation: "10th",
            duration: "Aug 2004 to July 2005",
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
                <h5 className="resume_heading">Education Details</h5>
                <div className="row">
                    {
                        educations.map(company =>
                            <Experience company={company} />
                        )
                    }
                </div>
            </div>


        </motion.div>
    );

};

export default Education;
