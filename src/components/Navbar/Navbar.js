import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {

        let URL = window.location.href

        if (URL.endsWith('/'))
            setActive('About')
        else if (URL.endsWith('/resume'))
            setActive('Resume')
        else if (URL.endsWith('/projects'))
            setActive('Projects')
        else if (URL.endsWith('/languages'))
            setActive('Languages')
        else if (URL.endsWith('/copyrights'))
            setActive('Copyrights')
        else if (URL.endsWith('/professional'))
            setActive('Professional')
        else if (URL.endsWith('/education'))
            setActive('Education')
    }, [active]);

    const navbar_motion = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1

        }
    }
    return (
        <motion.div className="navbar"
            variants={navbar_motion}
            initial='hidden'
            animate='visible'
        >
            <div className="navbar_active">
                {active}
            </div>
            <div className="navbar_items">

                {active !== 'About' &&
                    <Link to="/">
                        <div className="navbar_item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }

                {active !== 'Languages' &&
                    <Link to="/languages">
                        <div className="navbar_item" onClick={() => setActive('Languages')}>Languages</div>
                    </Link>
                }

                {active !== 'Projects' &&
                    <Link to="/projects">
                        <div className="navbar_item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>
                }

                {active !== 'Copyrights' &&
                    <Link to="/copyrights">
                        <div className="navbar_item" onClick={() => setActive('Copyrights')}>Copyrights</div>
                    </Link>
                }

                {active !== 'Professional' &&
                    <Link to="/professional">
                        <div className="navbar_item" onClick={() => setActive('Professional')}>Professional</div>
                    </Link>
                }
                {active !== 'Education' &&
                    <Link to="/education">
                        <div className="navbar_item" onClick={() => setActive('education')}>Education</div>
                    </Link>
                }
            </div>
        </motion.div>
    );

};

export default Navbar;