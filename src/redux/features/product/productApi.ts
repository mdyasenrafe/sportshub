import { BaseApi } from "../../../api/BaseApi";
import { Filters } from "../../../pages/Products/components/types";
import { TProduct } from "../../../types/productTypes";
import {
  addProduct,
  deleteProduct,
  setProducts,
  updateProduct,
} from "./productSlice";
import { ProductResponse, ProductsResponse } from "./types";

const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<ProductResponse, Partial<TProduct>>({
      query: (newProduct) => ({
        url: "/products/create",
        method: "POST",
        body: newProduct,
      }),
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addProduct(data.data));
        } catch (error) {}
      },
    }),
    getProducts: builder.query<ProductsResponse, any>({
      query: (filters) => ({
        url: "products",
        params: {
          ...(filters.searchTerm && { searchTerm: filters.searchTerm }),
          ...(filters.category && { category: filters.category }),
          ...(filters.priceGte !== undefined && {
            "price[gte]": filters.priceGte,
          }),
          ...(filters.priceLte !== undefined && {
            "price[lte]": filters.priceLte,
          }),
          ...(filters.brand && { brand: filters.brand }),
          ...(filters.rating !== undefined && { rating: filters.rating }),
          ...(filters.sort && { sort: filters.sort }),
        },
      }),
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {}
      },
      providesTags: ["Products"],
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
