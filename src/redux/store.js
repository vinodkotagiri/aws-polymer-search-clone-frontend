import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './reducers/repo'
import { reposAPI } from './reducers/apiCore'
export const store = configureStore({
	reducer: {
		repos: reposReducer,
		[reposAPI.reducerPath]: reposAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reposAPI.middleware),
})
