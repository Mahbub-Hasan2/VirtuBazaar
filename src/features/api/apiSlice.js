import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ["orders"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
            keepUnusedDataFor: 1200, // secend
        }),
    }),

});

export const {
    useGetProductsQuery,
} = apiSlice;