import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import IfmgaLogo from "../../logos/IfmgaLogo.svg";
import NortindLogo from "../../logos/NortindLogo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icon-container">
        <SocialIcon
          url="https://www.instagram.com/bergtagenguides/"
          className="social-icon"
        />
        <SocialIcon
          url="https://www.facebook.com/bergtagenguides/"
          className="social-icon"
        />
        <SocialIcon url="mailto:info@bergtagen.no" className="social-icon" />
      </div>
      <div className="info-container">
        <div>
          <i className="fa-solid fa-industry"></i> Org.nr: 928 697 436
        </div>
        <div>
          <i className="fa-solid fa-house"></i> Åsen 1, 8519 Narvik
        </div>
        <div>
          <i className="fa-solid fa-phone"></i> +47 48051147
        </div>
      </div>
      <div className="footer-logo-container">
        <Link to="/test">
          <img src={NortindLogo} alt="Logo" className="footer-img" />
        </Link>
        <Link to="/bergtagen">
          <img src={IfmgaLogo} alt="Logo" className="footer-img" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
