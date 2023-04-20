import { FC } from "react";
import "./index.css";

import background from "../../assets/contact_img.jpg";
interface aboutProps {}

const About: FC<aboutProps> = ({}) => {
  return (
    <div className="container-component col">
      <div className="about__img-container">
        <p className="about__txt">
          Chloé, diplômée du Studio des Arts Déco à Paris, et Laura, de l’école
          MMI Déco à Paris conçoivent des espaces intérieurs et des ambiances
          pour des particuliers et des professionnels, en veillant à répondre à
          chacune des attentes de leurs clients. Elles vous aident dans la
          rénovation et la décoration de votre intérieur afin d’optimiser son
          potentiel et le rendre à votre image. <br />
          Elles vous accompagnent dans toutes les étapes du projet : définition
          du plan idéal d’aménagement, conception détaillée (choix des
          matériaux, des couleurs et création de meubles sur mesure),
          consultation des entreprises et suivi des travaux.
        </p>
      </div>
    </div>
  );
};

export default About;
