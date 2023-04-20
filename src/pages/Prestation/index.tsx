import { FC } from "react";
import "./index.css";

interface prestationProps {}

const Prestation: FC<prestationProps> = ({}) => {
  return (
    <div className="container-component">
      <h1 className="title">Prestations</h1>
      <div className="prestation-container">
        <div className="prestation">
          <h2>Architecture d'intérieur</h2>
          <p className="prestation_txt">
            Si vous souhaitez repenser un volume existant, nous vous proposons
            d’imaginer un nouvel aménagement, travailler les circulations et la
            lumière afin d'obtenir un espace cohérent et adapté à votre mode de
            vie.
          </p>
          <h3>Conception</h3>
          <ul className="prestation__list">
            <li>un plan d'aménagement</li>
            <hr />
            <li>
              plans techniques (cloisons, électricité, revêtements sols et murs,
              ...)
            </li>
            <hr />
            <li>
              vues 3D afin de vous permettre de vous projeter dans votre projet
            </li>
          </ul>
          <h3>Suivi de chantier</h3>
          <ul className="prestation__list">
            <li>À vos côtés jusqu'à la remise des clés.</li>
          </ul>
        </div>
        <div className="prestation">
          <h2>Décoration</h2>
          <p className="prestation__txt">
            Afin d’apporter du cachet à votre logement, nous concevons des
            planches d’ambiances et des shoppings liste pour vous aider dans le
            choix des couleurs, des matières, du mobilier, des luminaires et
            autres éléments de décoration. Nous travaillons avec des nouveaux
            éléments, mais aussi avec votre propre mobilier si vous souhaitez le
            conserver.
          </p>
          <h3></h3>
          <ul className="prestation__list">
            <li>planches d'ambiance</li>
            <hr />
            <li>shopping listes</li>
          </ul>
        </div>
        <div className="prestation">
          <h2>Conception de mobilier sur mesure</h2>
          <p>
            Nous imaginons, avec votre collaboration, des meubles sur mesure
            afin qu’ils s’adaptent à votre intérieur et à vos besoins. La
            réalisation d’un plan et les représentations 3D vous permettront de
            visualiser votre projet. La conception de mobilier sur mesure peut
            faire partie intégrante d’un projet de rénovation ou constituer un
            projet indépendant.
          </p>
          <h3></h3>
          <ul className="prestation__list">
            <li>un plan 2D</li>
            <hr />
            <li>vues 3D</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prestation;
