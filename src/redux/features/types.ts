import { TProduct } from "../../types/productTypes";

export type TProductsState = {
  products: TProduct[];
};

// Define a type for the metadata
type MetaData = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

// Define a type for the getProducts response
export type ProductsResponse = {
  data: TProduct[];
  meta: MetaData;
};
