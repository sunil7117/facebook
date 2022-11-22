import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const auth = createApi({
  reducerPath: "facebookapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://faceboookapi1.herokuapp.com/api",
  }),
  endpoints: (builder) => {
    getAllPost: builder.query({
      query: () => ({
        url: "post",
      }),
    });
  },
});
