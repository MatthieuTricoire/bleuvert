import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

// Interfaces import

import { IArticle } from "../../Interface";

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div
      className="article-container"
      onClick={() => {
        handleOnClick();
      }}
    >
      <img
        className="article__photo"
        src={`http://localhost:1337${article.attributes.PhotoPrincipale.data.attributes.url}`}
        alt={`Photo d'un ${article.attributes.Categories.toLowerCase()}`}
      />
      <p className="article__titleSubtitle">
        {article.attributes.Titre.toUpperCase()} -{" "}
        {article.attributes.SousTitre}
      </p>
    </div>
  );
};

export default ArticleItem;
