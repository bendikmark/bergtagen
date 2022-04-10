import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header-container">
      <Logo className="header-logo" />
      <nav className="header-nav">
        <Link to={"/bergtagen"} about="Hjem">
          Hjem
        </Link>
        <Link to={"/bergtagen/omOss"} about="Om oss">
          Om oss
        </Link>
        <Link to={"/bergtagen/vilkar"} about="Vilkår">
          Vilkår
        </Link>
      </nav>
    </header>
  );
};

export default Header;
