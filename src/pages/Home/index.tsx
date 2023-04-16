import axios from "axios";
import { FC, useEffect, useState } from "react";
import ArticleItem from "../../components/ArticleItems";

export interface IArticle {
  id: number;
  attributes: {
    Titre: string;
    SousTitre: string;
    Surface: string;
    Categories: string;
    Description: string;
    Localisation: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    PhotoPrincipale: {};
    Photos: {};
  };
}

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
              Authorization:
                "Bearer daabd763aa5df4d9a1e0fe66903a0d3ec34333a35ecce96d69079c835440614851e36534fe9729488f5ed74af007f7550fdd7c6f60225e773575f8c370717647bb88a2319d1f26adfcc53e9d6ac5900722afea5ff581e9af7db3de32af36d0e1e2d1c35997006d83d1d989dc770c2b02bf46eba9228cbe26281fa38a22e17b43",
            },
          }
        );
        setArticles(response.data.data);
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
    <div>Loading</div>
  ) : (
    <div className="App">
      <h1>Liste des articles</h1>
      <div>
        <ul className="filter-nav">
          <li
            className={`${
              categorySelected === "Appartement" ? "selected" : ""
            }`}
            onClick={() => handleCategory("Appartement")}
          >
            <div className="">Appartement</div>
          </li>
          <li
            className={`${categorySelected === "Maison" ? "selected" : ""}`}
            onClick={() => handleCategory("Maison")}
          >
            Maison
          </li>
          <li
            className={`${categorySelected === "Toto" ? "selected" : ""}`}
            onClick={() => handleCategory("Toto")}
          >
            Toto
          </li>
        </ul>
      </div>
      <div className="articles-wrapper">
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
