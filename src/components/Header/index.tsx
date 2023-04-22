import "./index.css";
import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavItem from "../NavItem";

// import ReactIcons
import { GiHamburgerMenu } from "react-icons/gi";
import cx from "classnames";

import logo from "../../assets/Main_logo.svg";
import logoMobile from "../../assets/Logo_NoText.svg";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);

  if (expandedMenu) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <header className="container">
      {/* Logo large screens */}
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="logo"
      />

      {/* Logo small screens */}
      <img
        onClick={() => navigate("/")}
        src={logoMobile}
        alt="logo"
        className="logoMobile"
      />

      {/* Navbar */}
      <nav>
        <div className={`nav-menu ${expandedMenu ? "expanded" : ""}`}>
          <ul>
            <NavItem
              itemName="Projets"
              pathname={pathname}
              setState={setExpandedMenu}
              linkTo="/"
            />
            <NavItem
              itemName="Prestation"
              pathname={pathname}
              setState={setExpandedMenu}
              linkTo="/prestation"
            />
            <NavItem
              itemName="À propos"
              pathname={pathname}
              setState={setExpandedMenu}
              linkTo="/about"
            />
            <NavItem
              itemName="Contact"
              pathname={pathname}
              setState={setExpandedMenu}
              linkTo="/contact"
            />
          </ul>
        </div>
        {/* Hamburger icon  */}
        <div className="hamburger">
          <GiHamburgerMenu
            size={30}
            onClick={() => {
              setExpandedMenu(!expandedMenu);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
