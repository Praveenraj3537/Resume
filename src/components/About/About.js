import React from 'react';
import api from '../../assets/icons/rest-api-icon.png'
import computer_back from '../../assets/icons/computer_back.svg';
import services from '../../assets/icons/services.svg';
import aws from '../../assets/icons/aws.svg';
import monitor from '../../assets/icons/computer-monitor.svg';
import docker from '../../assets/icons/docker.svg';
import { motion } from 'framer-motion';
import Skillcard from '../Others/Skill';

const About = () => {

    const skills = [
        {
            icon: monitor,
            title: "Frontend Development",
            about: "I can build a beautiful and scalable SPA using HTML5, CSS3/SCSS, Javascript adhering to ES6 standards using ReactJS or Angular Framework."

        },
        {
            icon: computer_back,
            title: "Backend Development",
            about: "I can make use NodeJS or NESTJs to handle bankend along with databases like postgres, mysql or MongoDB."
        },
        {
            icon: api,
            title: "API Development",
            about: "I can develop robust RESTFul API and make use of postman and swagger for the testing purposes."
        },
        {
            icon: services,
            title: "Micro Services",
            about: "I can create a micro-service to handle publishing and subsribing messages through message brokers such as RabbitMQ."
        },
        {
            icon: aws,
            title: "AWS Services",
            about: "I can make use of aws serives to implement."
        },
        {
            icon: docker,
            title: "Docker Services",
            about: "I can make use of docker services to manage and deploy."
        }

    ];

    const about_motion = {
        hidden: {
            y: '-100vh'
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
        <motion.div className="container about"
            variants={about_motion}
            initial='hidden'
            animate='visible'
        >

            <div className="container about_container">
                <h5 className="about_heading">Skills I can offer as a service</h5>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;