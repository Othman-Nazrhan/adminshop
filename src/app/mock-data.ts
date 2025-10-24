import { IProduct } from './model/product';
import { Order } from './model/order';

export const MOCK_PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: 'Produit 1',
    price: 100,
    marque: 'Marque A',
    productTypeVO: {
      id: 1,
      name: 'Type A',
      description: 'Description Type A'
    },
    pictures: ['image1.jpg', 'image2.jpg']
  },
  {
    id: 2,
    name: 'Produit 2',
    price: 200,
    marque: 'Marque B',
    productTypeVO: {
      id: 2,
      name: 'Type B',
      description: 'Description Type B'
    },
    pictures: ['image3.jpg']
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    client: 'Client 1',
    product: 'Produit 1',
    prix: 100,
    category: 'Catégorie A'
  },
  {
    id: 2,
    client: 'Client 2',
    product: 'Produit 2',
    prix: 200,
    category: 'Catégorie B'
  }
];
