import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={IntroImg} width='100%' alt="IntroImg"/>
        </div> 
        <div className="content">
         <p> HI,I'M KARISHMA SAXENA.</p>
         <h1> React Project. </h1>
        <div>
            <Link to="/projects" className="btn ">
                Projects
                </Link>
                 <Link to="/contact"
                className="btn btn-light">
                Contact
                </Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg ;