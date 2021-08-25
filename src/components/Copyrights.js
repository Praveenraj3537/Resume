import React from 'react';
import CopyrightsDetails from './CopyrightsDetails';
import { motion } from 'framer-motion';

const Copyrights = () => {

    const copies = [
        {
            title: "Automated Physical Protection for Automatic Teller Machines to Prevent Against Cash Box Thefts",
            registration: "Registration Number: L-59851/2014.",
            year: 2014

        },
        {
            title: "Implementing Mobile ZigBee Module in Traffic Control System to Clear Way for Ambulance",
            registration: "Diary Number: 46726/2014-CO/SW.",
            year: 2014
        },
        {
            title: "Automatic Detection and Notification of Potholes and Humps on Roads to Aid Drivers",
            registration: "Diary Number: 409/2015-CO/L.",
            year: 2015
        },
        {
            title: "Sandalwood tree Protection Using Bluetooth Version 4.0",
            registration: "Diary Number: 3384/2015-CO/L.",
            year: 2015
        },
    ];

    const copy_motion = {
        hidden:{
            y:'-100vh'
        },
        visible:{
            y:0,
            transition:{
                delay:0.5,
                duration:0.7,
                type:'spring'
            }
        }
    }

    return (
        <motion.div className="about"
        variants={copy_motion}
        initial='hidden'
        animate='visible'
        >
            <div className="container about_container">
                <h3 className="about_heading">
                    List of Copyrights Granted/Registered
                </h3>
                <div className="row">
                    {
                        copies.map(copy =>
                            <CopyrightsDetails copy={copy} />
                        )
                    }
                </div>
            </div>
        </motion.div>

    );

};

export default Copyrights;