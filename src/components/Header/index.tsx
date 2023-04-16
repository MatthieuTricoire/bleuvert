import { FC } from "react";
import { Link } from "react-router-dom";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <Link to="/">Projets</Link>
        <Link to="/prestation">Prestations</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
