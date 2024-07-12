import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sportshub-server.vercel.app/api/v1/",
  // baseUrl: "http://localhost:3001/api/v1/",
});

export const BaseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Products"],
});
