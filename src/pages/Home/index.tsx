import axios from "axios";
import { FC, useEffect, useState } from "react";
import ArticleItem from "../../components/ArticleItems";
import "./index.css";

import { IArticle } from "../../Interface";

interface homeProps {}

const Home: FC<homeProps> = ({}) => {
  const [articles, setArticles] = useState<IArticle[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categorySelected, setCategorySelected] = useState<string>("");

  const handleCategory = (categoryToFilter: string) => {
    if (categoryToFilter === categorySelected) {
      setCategorySelected("");
    } else {
      setCategorySelected(categoryToFilter);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/articles?populate=PhotoPrincipale`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API}`,
            },
          }
        );
        setArticles(response.data.data as IArticle[]);
        setIsLoading(false);
      } catch (error) {
        let message = "Unknow error";
        if (error instanceof Error) message = error.message;
        reportError({ message });
      }
    };
    fetchArticles();
  }, []);

  return isLoading ? (
    <div className="container-component">Loading</div>
  ) : (
    <div className="container-component">
      <h1 className="title">RÉALISATIONS</h1>
      <div>
        <ul className="filter-nav">
          <li
            className={`${
              categorySelected === "Appartement" ? "selected" : ""
            }`}
            onClick={() => handleCategory("Appartement")}
          >
            <p>APPARTEMENT</p>
          </li>
          /
          <li
            className={`${categorySelected === "Maison" ? "selected" : ""}`}
            onClick={() => handleCategory("Maison")}
          >
            MAISON
          </li>
          /
          <li
            className={`${categorySelected === "Toto" ? "selected" : ""}`}
            onClick={() => handleCategory("Toto")}
          >
            LIEU PULIC
          </li>
        </ul>
      </div>
      <div className="articles-wrapper">
        {/*todo Faire un check si aucun article appartient à cette categorie */}
        {!articles ? (
          <p>Aucun article</p>
        ) : (
          articles
            .filter(
              (article) =>
                !categorySelected ||
                article.attributes.Categories === categorySelected
            )
            .map((article) => {
              return <ArticleItem key={article.id} article={article} />;
            })
        )}
      </div>
    </div>
  );
};

export default Home;
