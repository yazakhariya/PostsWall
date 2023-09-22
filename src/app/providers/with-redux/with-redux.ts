import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QueryFn } from './types'

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<QueryFn, void>({
      query: () => '/posts',
    }),
  }),
})

export const { useGetPostsQuery } = jsonPlaceholderApi