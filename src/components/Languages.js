import React from 'react';
import html from '../assets/icons/HTML5.svg';
import css from '../assets/icons/CSS3.svg';
import boot from '../assets/icons/Bootstrap.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/Typescript.svg';
import angular from '../assets/icons/angular.svg';
import c from '../assets/icons/c.svg';
import py from '../assets/icons/python.svg';
import react from '../assets/icons/react.svg';
import node from '../assets/icons/nodejs.svg';
import nest from '../assets/icons/nestjs.svg';
import LanguagesDetails from './LanguagesDetails';
import { motion } from 'framer-motion';


const languages = [
    {
        icon: py,
        lang: "Python 3",
        level: '90'
    },
    {
        icon: c,
        lang: "C Programming",
        level: '85'
    },
    {
        icon: javascript,
        lang: "Javascript",
        level: '80'
    },
    {
        icon: html,
        lang: "HTML 5",
        level: '90'

    },
    {
        icon: css,
        lang: "CSS 3",
        level:'90'
    },
    {
        icon: boot,
        lang: "Bootstrap",
        level: '80'
    },
    
    {
        icon: typescript,
        lang: "Typescript",
        level: '72'
    },      

];

const frameworks = [
    
    {
        icon: react,
        lang: "ReactJS",
        level: '80'
    },
    {
        icon: angular,
        lang: "Angular",
        level: '76'

    },
    {
        icon: node,
        lang: "NodeJS",
        level: '72'
    },
    {
        icon: nest,
        lang: "NestJS",
        level: '65'
    }
];

const language_motion = {
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

const Languages = () => {
    return (
        <motion.div className="language"
        variants={language_motion}
        initial='hidden'
        animate='visible'
        >
            <div className="container language_container">
                <h5 className="language_heading">Programming Languages</h5>
                    <div className="row">
                        {
                            languages.map(lang =>
                                <LanguagesDetails language={lang} />
                            )
                        }
                    </div>
                    <h5 className="language_heading">Frameworks/Libraries</h5>
                    <div className="row">
                        {
                            frameworks.map(lang =>
                                <LanguagesDetails language={lang} />
                            )
                        }
                    </div>
                </div>
            </motion.div>
    );

};

export default Languages;