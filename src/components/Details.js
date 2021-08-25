import React from 'react';
import Experience from './Experience';
import trak from '../assets/icons/trak.jpg';
import kle from '../assets/icons/kle.jfif';
import bvb from '../assets/icons/bvb.jpg';
import intel from '../assets/icons/Intel.svg';
import sainik from '../assets/icons/sainik.png';
import uvce from '../assets/icons/uvce.jfif';
import bms from '../assets/icons/bms.png';
import { motion } from 'framer-motion';

const Details = () =>{
    const experiences = [
        {
            icon: trak,
            name:"TrakInvest", 
            designation:"FullStack Developer", 
            duration:"June 2021 to Present", 
            role:"Developer"
        },
        {
            icon:kle,
            name:"KLE Technological University", 
            designation:"Assistant Professor", 
            duration:"Aug 2016 to April 2021", 
            role:"Teaching/Research"
        },
        {
            icon:bvb,
            name:"BVB College of Engineering", 
            designation:"Teaching Assistant", 
            duration:"Aug 2015 to July 2016", 
            role:"Teaching/Research"
        },
        {
            icon:intel,
            name:"INTEL India Pvt. Ltd", 
            designation:"INTERN", 
            duration:"July 2013 to Oct 2014", 
            role:"Developer"
        },

    ];

    const educations = [
        {
            icon: bms,
            name:"BMS College of Engineering", 
            designation:"M.Tech(CSE)", 
            duration:"Aug 2013 to July 2015", 
        },
        {
            icon: uvce,
            name:"University Visvesvaraya College of Engineering", 
            designation:"B.E(ISE)", 
            duration:"Aug 2007 to July 2012", 
        },
        {
            icon: sainik,
            name:"Sainik School Bijapur", 
            designation:"12th", 
            duration:"Aug 2006 to July 2007", 
        },
        {
            icon: sainik,
            name:"Sainik School Bijapur", 
            designation:"10th", 
            duration:"Aug 2004 to July 2005", 
        },
        

    ];

    const details_motion = {
        hidden:{
            y:'-99vh'
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
                        <Experience company = {company}/>
                            )
                    }
                </div>
                <h5 className="resume_heading">Education Details</h5>
                    <div className="row">
                    {
                        educations.map(company =>
                        <Experience company = {company}/>
                            )
                    }
                </div>
            </div>
            

        </motion.div>
    );

};

export default Details;