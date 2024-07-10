import { BaseApi } from "../../api/BaseApi";
import { TProduct } from "../../types/productTypes";
import { deleteProduct, setProducts, updateProduct } from "./ProductSlice";
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
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
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
    updateProduct: builder.mutation<ProductResponse, TProduct>({
      query: (payload) => ({
        url: `/products/${payload._id}`,
        method: "PUT",
        body: payload,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateProduct(data.data));
        } catch (err) {}
      },
    }),
    deleteProduct: builder.mutation<ProductResponse, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(deleteProduct(data.data._id));
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductApi;
