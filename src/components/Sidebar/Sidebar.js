import React from "react";
import linkedin from "../../assets/icons/linkedin.gif";
import github from "../../assets/icons/github.svg";
import pin from "../../assets/icons/pin.svg";
import resume from "../../assets/icons/resume.svg";
import gscholar from "../../assets/icons/Google_Scholar_logo.svg";
// import CV from "../assets/PRAVEENRAJ_CV.pdf";
// import Resume from "../assets/PRAVEENRAJ_RESUME.pdf";
import one from "../../assets/one_.jpeg";
import email from "../../assets/icons/email.svg";
import coffee from "../../assets/icons/coffeescript.svg";
import mobile from "../../assets/icons/mobile.svg";
import { motion } from "framer-motion";

const Sidebar = () => {
  const emailHandle = () => {
    window.open("mailto:pattar.praveenraj3537@gmail.com");
  };

  const sidebar_motion = {
    hidden: {
      x: "-50vw",
      // opacity: 0
    },

    visible: {
      x: 0,
      // opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_motion}
      initial="hidden"
      animate="visible"
    >
      <img src={one} alt="Profile Pic" className="sidebar_image" />
      <div className="sidebar_name">Praveenraj Pattar</div>
      <div className="sidebar_item sidebar_title">Full-Stack Developer & Researcher</div>

      <a href="https://drive.google.com/file/d/1bxCrnyH-q52OG_-uInx0KuaQ7DY3dRX2/view?usp=share_link" target="_blank" rel="noopener noreferrer">
        <div className="sidebar_item sidebar_item_resume">
          <img src={resume} alt="CV" className="sidebar_icon mr-2" /> CV
        </div>
      </a>
      <a href="https://drive.google.com/file/d/16abN1NUl7hT6OQg6Eee3IwhIe1JM-w2y/view?usp=share_link" target="_blank" rel="noopener noreferrer">
        <div className="sidebar_item sidebar_item_resume">
          <img src={resume} alt="Resume" className="sidebar_icon mr-3" /> Resume
        </div>
      </a>
      <figure className="sidebar_social-icons my-2">
        <a href="https://www.github.com/Praveenraj3537" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github-link" className="sidebar_icon mr-3" />
        </a>
        <a
          href="https://linkedin.com/in/praveenraj-pattar-95588941/"
          target="_blank" rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedIn-link"
            className="sidebar_icon mr-3"
          />
        </a>
        <a href="https://scholar.google.com/citations?user=nnUsgIYAAAAJ" target="_blank" rel="noopener noreferrer">
          <img
            src={gscholar}
            alt="GoogleScholarLink"
            className="sidebar_icon mr-2"
          />
        </a>
      </figure>
      <div className="sidebar_contact">
        <div className="sidebar_location">
          <img src={pin} alt="location" className="sidebar_icon_pin " />{" "}
          <span>Hubballi-580031, KA, INDIA</span>
        </div>
        <div className="sidebar_item sidebar_email_display">
          <img src={email} alt="Email" className="sidebar_icon_pin" />{" "}
          pattar.praveenraj3537@gmail.com
        </div>
        <div className="sidebar_item">
          <img src={mobile} alt="mobile" className="sidebar_icon_pin" /> +91
          97318 63901
        </div>
      </div>
      <div className="sidebar_item sidebar_email" onClick={emailHandle}>
        Mail Me
      </div>
      <div className="sidebar_item sidebar_coffee">
        <img src={coffee} alt="coffee" className="sidebar_icon_pin" />
        <a href="https://www.buymeacoffee.com/pbpattar" target="_blank" rel="noopener noreferrer"> Buy me a Chai </a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
