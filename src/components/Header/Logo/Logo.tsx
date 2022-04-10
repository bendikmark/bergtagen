import React from "react";
import HeaderLogo from "./HeaderLogo.svg";
import { Link } from "react-router-dom";

type LogoProps = {
  className: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/bergtagen" className={className}>
      <img src={HeaderLogo} alt="Logo" />
    </Link>
  );
};

export default Logo;
