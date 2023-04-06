import { LoginSchema } from "@/schemas/login";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  result: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginSchema>({
      query: (body) => ({
        url: "/api/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
