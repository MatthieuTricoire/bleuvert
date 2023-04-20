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
    PhotoPrincipale: {
      data: IPhoto;
    };
    Photos: {
      data: IPhoto[];
    };
  };
}

export interface IPhoto {
  id: number;
  attributes: {
    name: string;
    url: string;
    width: number;
    height: number
  };
}
