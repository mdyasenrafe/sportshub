import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartState, TCart } from "./types";
import { TProduct } from "../../../types/productTypes";

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
        existingCartItem.price =
          existingCartItem.quantity * parseFloat(product.price);
        existingCartItem.vat = existingCartItem.price * 0.2; // Assuming VAT is 20%
      } else {
        const newCartItem: TCart = {
          product,
          quantity,
          price: quantity * parseFloat(product.price),
          vat: quantity * parseFloat(product.price) * 0.2, // Assuming VAT is 20%
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
        existingCartItem.price =
          quantity * parseFloat(existingCartItem.product.price);
        existingCartItem.vat = existingCartItem.price * 0.2; // Assuming VAT is 20%
      }
    },
    deleteCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cart = state.cart.filter(
        (item) => item.product._id !== action.payload.productId
      );
    },
  },
});

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
