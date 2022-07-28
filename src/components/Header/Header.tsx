import React from "react";
//import Logo from "../Logo";
import StyledLink from "../StyledLink";
import HeaderLogo from "../../logos/HeaderLogo.svg";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/bergtagen">
        <img src={HeaderLogo} alt="Logo" className="header-img" />
      </Link>
      <nav className="header-nav">
        <StyledLink href="/bergtagen" content="Hjem" />
        <StyledLink href="/bergtagen/om" content="Om oss" />
        <StyledLink href="/bergtagen/vilkaar" content="Vilkår" />
      </nav>
    </header>
  );
};

export default Header;
