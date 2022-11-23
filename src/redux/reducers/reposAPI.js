import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
export const reposAPI = createApi({
	reducerPath: 'reposAPI',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
	endpoints: (builder) => ({
		getReposData: builder.query({
			query: () => '/repos',
		}),
	}),
})
export const { useGetReposDataQuery } = reposAPI
