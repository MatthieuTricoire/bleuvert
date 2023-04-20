import "./index.css";
import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import ReactIcons
import { GiHamburgerMenu } from "react-icons/gi";
import cx from "classnames";

import logo from "../../assets/Main_logo.svg";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className="container">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="logo"
      />

      <nav>
        <label htmlFor="toggle">
          <GiHamburgerMenu />
        </label>
        <input type="checkbox" id="toggle" />
        <div className="main_pages">
          <Link
            className={cx("nav__item", {
              "nav__item--active": pathname === "/",
            })}
            to="/"
          >
            Projets
          </Link>
          <Link
            className={cx("nav__item", {
              "nav__item--active": pathname === "/prestation",
            })}
            to="/prestation"
          >
            Prestations
          </Link>
          <Link
            className={cx("nav__item", {
              "nav__item--active": pathname === "/about",
            })}
            to="/about"
          >
            À propos
          </Link>
          <Link
            className={cx("nav__item", {
              "nav__item--active": pathname === "/contact",
            })}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
