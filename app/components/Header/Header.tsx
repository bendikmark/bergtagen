import StyledLink from "../StyledLink";
import HeaderLogo from "../../logos/HeaderLogo";
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import headerStyle from "./Header.css";
import { styledLinkLinks } from "../StyledLink";

export const headerLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: headerStyle }, ...styledLinkLinks()];
};

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <HeaderLogo className="header-img" />
      </Link>
      <nav className="header-nav">
        <StyledLink href="/" content="Hjem" />
        <StyledLink href="/omoss" content="Om oss" />
        <StyledLink href="/vilkaar" content="Vilkår" />
        <StyledLink href="/galleri" content="Galleri" />
      </nav>
    </header>
  );
};

export default Header;
