import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartState, TCart } from "./types";
import { TProduct } from "../../../types/productTypes";
import { RootState } from "../../store";

const initialState: TCartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{ product: TProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingCartItem = state.cart.find(
        (item) => item.product._id === product._id
      );

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
        existingCartItem.price = existingCartItem.quantity * product.price;
        existingCartItem.vat = existingCartItem.price * 0.15;
      } else {
        const newCartItem: TCart = {
          product,
          quantity,
          price: quantity * product.price,
          vat: quantity * product.price * 0.15, // Assuming VAT is 15%
        };
        state.cart.push(newCartItem);
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingCartItem = state.cart.find(
        (item) => item.product._id === productId
      );

      if (existingCartItem) {
        existingCartItem.quantity = quantity;
        existingCartItem.price = quantity * existingCartItem.product.price;
        existingCartItem.vat = existingCartItem.price * 0.15;
      }
    },
    deleteCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cart = state.cart.filter(
        (item) => item.product._id !== action.payload.productId
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCart, updateCart, deleteCart, clearCart } = cartSlice.actions;

export const getCarts = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
