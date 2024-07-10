import { BaseApi } from "../../api/BaseApi";
import { TProduct } from "../../types/productTypes";

const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<TProduct, Partial<TProduct>>({
      query: (newProduct) => ({
        url: "/products/create",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = ProductApi;
