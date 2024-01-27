import "./Work.CardStyle.css";
/*import project1 from "../assets/project1.png";*/
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src="" alt="image"/>
            <h2 className="project-title">Project Title</h2>
            <div className="project-details">
                <p>This is detail about project</p>
                <div className="project-btn">
                 <NavLink to="url.com" className="btn">View</NavLink>
                 <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default WorkCard;
