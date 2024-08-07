import React, { useState } from 'react';
import data_projects from '../Projects/Project_data';
import ProjectDetails from './ProjectDetails';
import { motion } from 'framer-motion';

const Projects = () => {

    const [projects, setProjects] = useState(data_projects)

    const handlFilterCategory = (name) => {
        const array = data_projects.filter(project => project.category.includes(name))
        setProjects(array)
    }

    const project_motion = {
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
        <motion.div className="container projects"
            variants={project_motion}
            initial='hidden'
            animate='visible'
        >
            <div className="projects_navbar">
                <div onClick={() => handlFilterCategory('python')}>Python</div>
                <div onClick={() => handlFilterCategory('ML/DL')}>ML/DL</div>
                <div onClick={() => handlFilterCategory('react')}>React</div>
                <div onClick={() => handlFilterCategory('angular')}>Angular</div>
                <div onClick={() => handlFilterCategory('c')}>C</div>
                <div onClick={() => handlFilterCategory('nestjs')}>NestJS</div>
                <div onClick={() => setProjects(data_projects)}>All</div>

            </div>
            <div className="row">
                {
                    projects.map(project =>
                        <ProjectDetails key={project.name} project={project} />
                    )
                }
            </div>
        </motion.div>
    );
}

export default Projects;
