import { TProduct } from "../../../types/productTypes";

export type TCart = {
  product: TProduct;
  quantity: number;
  price: number;
  vat: number;
};

export type TCartState = {
  cart: TCart[];
};
