import "./FooterStyle.css";
import { FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color : "#fff" , marginRight : "2rem"}} />
                <div>
                  <p>Brij Bihar Colony.</p>
                    <p>Shahjahanpur , Uttar Pradesh</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color : "#fff" , marginRight : "2rem"}} />
            +91-7522896206 </h4>
            </div>
            
            <div className="email">
            <h4><FaMailBulk size={20} style={{color : "#fff" , marginRight : "2rem"}} />
            saxenakarishma13@gmail.com   </h4>
              </div>
           </div>
        <div className="right">
            <h4>About project</h4>
            <p>This is my first react project and , I enjoy design challenges.</p>
            <div className="social">
            <FaFacebook size={20} style={{color : "#fff" , marginRight : "2rem"}} />
            
            <FaInstagram size={20} style={{color : "#fff" , marginRight : "2rem"}} />
           
            <FaLinkedin size={20} style={{color : "#fff" , marginRight : "2rem"}} />

            <FaTwitter size={20} style={{color : "#fff" , marginRight : "2rem"}} />
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
