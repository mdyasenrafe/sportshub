import { BaseApi } from "./BaseApi";

const uploadApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    imageUpload: builder.mutation({
      query: (payload) => ({
        url: "upload/image/",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useImageUploadMutation } = uploadApi;
