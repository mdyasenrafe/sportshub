import { BaseApi } from "../../api/BaseApi";
import { TProduct } from "../../types/productTypes";
import { setProducts } from "./ProductSlice";
import { ProductResponse, ProductsResponse } from "./types";

const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<TProduct, Partial<TProduct>>({
      query: (newProduct) => ({
        url: "/products/create",
        method: "POST",
        body: newProduct,
      }),
    }),
    getProducts: builder.query<ProductsResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      async onQueryStarted(_Id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {}
      },
    }),
    getProductsById: builder.query<ProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductsByIdQuery,
} = ProductApi;
