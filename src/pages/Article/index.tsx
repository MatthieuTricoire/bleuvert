import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./index.css";

// Interfaces import
import { IArticle } from "../../Interface";
import { IPhoto } from "../../Interface";

// Componentes imports
import Modal from "../../components/Modal";

const Article = () => {
  const { id } = useParams();

  const [articleData, setarticleData] = useState<IArticle>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [colNb, setColNb] = useState<number>(2);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const test = window.innerWidth;
    const handleResize = () => {
      const width = window.innerWidth;
      console.log(width);
      if (width <= 600) {
        setColNb(1);
      } else {
        setColNb(2);
      }
    };
    handleResize();
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/articles/${id}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API}`,
          },
        }
      );
      setarticleData(response.data.data);
      setIsLoading(false);
    };
    fetchProject();
  }, []);

  // Parse the array of images to split them in two tables depending of the height of each table
  // const assignColImages = (X: number, images: IPhoto[]): IPhoto[][] => {
  const assignColImages = (images: IPhoto[]): IPhoto[][] => {
    // Initialize X cells to 0
    const sumRatioImgArr = Array<number>(colNb).fill(0);
    // Initialize X empty array
    const result: IPhoto[][] = Array.from(Array<IPhoto[]>(colNb), () => []);

    if (images) {
      images.forEach((image) => {
        // Check the minimun
        const minRatioValue = Math.min(...sumRatioImgArr);
        const indexCol = sumRatioImgArr.indexOf(minRatioValue);
        result[indexCol].push(image);
        sumRatioImgArr[indexCol] +=
          image.attributes.height / image.attributes.width;
      });
    }
    return result;
  };

  if (!articleData?.attributes.Photos.data) return;
  const cols = assignColImages(articleData?.attributes.Photos.data);

  const fillImage = (array: IPhoto[], index: number) => {
    return (
      <div className="article__img__col" key={index}>
        {array.map((image) => {
          return (
            <img
              key={image.id}
              src={`${import.meta.env.VITE_STRAPI_ENDPONT}${
                image.attributes.url
              }`}
              alt={image.attributes.url}
            />
          );
        })}
      </div>
    );
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="container-component article">
      <h1 className="title">{articleData?.attributes.Titre}</h1>

      <h2>{articleData?.attributes.SousTitre}</h2>

      <img
        className="article__photo"
        src={`${import.meta.env.VITE_STRAPI_ENDPONT}${
          articleData.attributes.PhotoPrincipale.data.attributes.url
        }`}
        alt={`Photo d'un ${articleData.attributes.Categories.toLowerCase()}`}
      />

      <div className="article__info">
        <div className="article__info__details">
          <div>
            <h3>Surface</h3>
            {articleData.attributes.Surface} m²
          </div>
          <hr />
          <div>
            <h3>Localisation</h3>
            {articleData.attributes.Localisation}
          </div>
        </div>
        <div className="article__info__description">
          {articleData?.attributes.Description}
        </div>
      </div>

      <div className="gallery">
        {cols.map((col, index) => fillImage(col, index))}
      </div>
    </div>
  );
};

export default Article;
