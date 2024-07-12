export interface TProduct {
  _id: string;
  productName: string;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating: number;
  price: number;
  thumb: string;
  coverPictures: string[];
}
