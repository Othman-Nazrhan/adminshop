export interface IProduct {
  id?: number;
  name: string;
  price: number;
  marque: string;
  productTypeVO: IProductTypeVO;
  pictures: string[];
}

export interface IProductTypeVO {
  id: number;
  name: string;
  description: string;
}
