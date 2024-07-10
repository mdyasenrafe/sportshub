import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../types/productTypes";
import { TProductsState } from "./types";
import { RootState } from "../store";

const initialState: TProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      let product = state.products.find(
        (product) => product._id === action.payload._id
      );
      product = action.payload;
    },
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, setProducts } =
  productsSlice.actions;

export const getProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
