import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.quotable.io" }),
    endpoints: (builder) => ({
      getRandom: builder.query({
        query: () => '/random'
      }),
    }),
  })

  export const {
    useGetRandomQuery
  }= apiSlice