import { FC } from "react";
import { IArticle } from "../../pages/Home";
import "./index.css";

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  return (
    <div className="article-container">
      <img
        className="article__photo"
        src={`http://localhost:1337${article.attributes.PhotoPrincipale.data.attributes.url}`}
        alt={`Photo d'un ${article.attributes.Categories.toLowerCase()}`}
      />
      <p>
        {article.attributes.Titre.toUpperCase()} -{" "}
        {article.attributes.SousTitre}
      </p>
    </div>
  );
};

export default ArticleItem;
