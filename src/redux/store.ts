import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "../api/BaseApi";
import ProductReducer from "./features/ProductSlice";

export const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
    products: ProductReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(BaseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
