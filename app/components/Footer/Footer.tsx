import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SocialIcon } from "react-social-icons";
import IfmgaLogo from "../../logos/IfmgaLogo";
import NortindLogo from "../../logos/NortindLogo";
import footerStyles from "./Footer.css";

export const footerLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: footerStyles }];
};

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
      <div className="footer-img-container">
        <Link to="/test">
          <NortindLogo className="footer-img" />
        </Link>
        <Link to="/bergtagen">
          <IfmgaLogo className="footer-img" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
