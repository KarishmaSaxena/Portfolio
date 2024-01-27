import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from "react";
import React1 from "../assets/react1.webp";
import React2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>text </p>
            <Link to= "/contact">
                <button className="btn" >
                    Contact
                </button>
            </Link>
        </div>
      
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src = {React1} className="img"        alt="true" />
               </div>

             <div className="img-stack bottom">
                <img src={React2} className="img"        alt="true" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
