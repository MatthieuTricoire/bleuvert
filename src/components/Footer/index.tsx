import { FC } from "react";
import "./index.css";
import secondaryLogo from "../../assets/Logo_NoText_White.svg";
import secondaryLogoMobile from "../../assets/Favicon.svg";

import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Contact from "../Contact";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <footer className="footer container">
      <div className="footer__sidePart">
        <Contact firstname="Laura" lastname="Terneyre" phone="06.73.31.89.09" />
      </div>

      <div className="footer__centralPart">
        <img
          src={secondaryLogo}
          alt=""
          color="white"
          className="footer__logo"
        />
        <img
          src={secondaryLogoMobile}
          alt=""
          className="footer__logo--mobile"
        />
        <Link
          to={`https://www.instagram.com/studio_bleuvert/`}
          className="footer__centralPart__insta"
        >
          <BsInstagram color="white" size={20} />
        </Link>
      </div>

      <div className="footer__sidePart">
        <Contact
          firstname="Chloé"
          lastname="Bordenave"
          phone="06.25.25.09.10"
        />
      </div>
    </footer>
  );
};

export default Footer;
