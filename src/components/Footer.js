import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img
              src="https://cecieee.org/images/IEEE-SB-logo-white-web.png"
              alt="Logo"
            />
          </div>
          <div className="social-media">
            <a
              href="https://www.facebook.com/IEEECEC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/cecieee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/ieee_sb_cec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="address">
            <h3>IEEE Student Branch,</h3>
            <p>
              College of Engineering, Chengannur Alapuzha, Kerala Pin:689121
            </p>
            <p>Email: chairman_ieee@ceconline.edu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
