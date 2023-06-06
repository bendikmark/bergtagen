import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styledLinkStyles from "./StyledLink.css";

type StyledLinkProps = {
  href: string;
  content: string;
};

export const styledLinkLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styledLinkStyles }];
};

const StyledLink = ({ href, content }: StyledLinkProps) => {
  return (
    <Link to={href} about={content} className="styled-link">
      {content}
    </Link>
  );
};

export default StyledLink;
