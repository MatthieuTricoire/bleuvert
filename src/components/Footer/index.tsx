import { FC } from "react";
import "./index.css";
import secondaryLogo from "../../assets/Logo_NoText.svg";

import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Contact from "../Contact";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <footer className="footer container">
      <div>
        <Contact firstname="Laura" lastname="Terneyre" phone="06.73.31.89.09" />
      </div>

      <div className="footer__centralPart">
        <img src={secondaryLogo} alt="" color="white" />
        <Link
          to={`https://www.instagram.com/studio_bleuvert/`}
          className="footer__centralPart__insta"
        >
          <BsInstagram color="white" size={20} />
        </Link>
      </div>

      <div>
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
