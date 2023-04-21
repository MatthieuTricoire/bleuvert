import "./index.css";
import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="logo"
      />
      <img
        onClick={() => navigate("/")}
        src={logoMobile}
        alt="logo"
        className="logoMobile"
      />

      <nav>
        <div className={`nav-menu ${expandedMenu ? "expanded" : ""}`}>
          <ul>
            <li>
              <Link
                className={cx("nav__item", {
                  "nav__item--active": pathname === "/",
                })}
                to="/"
                onClick={() => {
                  setExpandedMenu(false);
                }}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                className={cx("nav__item", {
                  "nav__item--active": pathname === "/prestation",
                })}
                to="/prestation"
                onClick={() => setExpandedMenu(false)}
              >
                Prestations
              </Link>
            </li>
            <li>
              <Link
                className={cx("nav__item", {
                  "nav__item--active": pathname === "/about",
                })}
                to="/about"
                onClick={() => setExpandedMenu(false)}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                className={cx("nav__item", {
                  "nav__item--active": pathname === "/contact",
                })}
                to="/contact"
                onClick={() => setExpandedMenu(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hamburger">
            <GiHamburgerMenu
              onClick={() => {
                setExpandedMenu(!expandedMenu);
              }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
