import { BaseApi } from "../../../api/BaseApi";
import { TProduct } from "../../../types/productTypes";
import { TOrder } from "./types";

const orderApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<any, Partial<TOrder>>({
      query: (newProduct) => ({
        url: "/order/place-order",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
