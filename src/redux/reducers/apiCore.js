import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
export const reposAPI = createApi({
	reducerPath: 'reposAPI',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
	endpoints: (builder) => ({
		getReposData: builder.query({
			query: () => '/repos',
		}),
		getCategoriesData: builder.query({
			query: () => '/categories',
		}),
		getNumericalsData: builder.query({
			query: () => '/numericals',
		}),
		getLinksData: builder.query({
			query: () => '/links',
		}),
		getBooleansData: builder.query({
			query: () => '/booleans',
		}),
		getDatesData: builder.query({
			query: () => '/dates',
		}),
	}),
})
export const {
	useGetReposDataQuery,
	useGetNumericalsDataQuery,
	useGetCategoriesDataQuery,
	useGetLinksDataQuery,
	useGetBooleansDataQuery,
	useGetDatesDataQuery,
} = reposAPI
