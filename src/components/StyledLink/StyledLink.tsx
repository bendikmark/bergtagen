import React from "react";
import { Link } from "react-router-dom";
import "./StyledLink.css";

type StyledLinkProps = {
  href: string;
  content: string;
};

const StyledLink = ({ href, content }: StyledLinkProps) => {
  return (
    <Link to={href} about={content} className="styled-link">
      {content}
    </Link>
  );
};

export default StyledLink;
