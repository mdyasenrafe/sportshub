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
    getProducts: builder.query<ProductsResponse, Filters | undefined>({
      query: (filters) => {
        let params: any = {};
        if (filters) {
          params = Object.keys(filters).reduce((acc, key) => {
            const filterKey = key as keyof Filters;
            const value = filters[filterKey];
            if (value !== undefined) {
              if (filterKey === "priceGte") {
                acc["price[gte]"] = value;
              } else if (filterKey === "priceLte") {
                acc["price[lte]"] = value;
              } else {
                acc[filterKey] = value;
              }
            }
            return acc;
          }, {} as Record<string, any>);
          if (filters.limit !== undefined) {
            params.limit = filters.limit;
          }
          if (filters.page !== undefined) {
            params.page = filters.page;
          }
        }

        return { url: "products", params };
      },
      onQueryStarted: async (filters, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
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
