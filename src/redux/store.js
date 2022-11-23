import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './reducers/repoSlice'
import { reposAPI } from './reducers/reposAPI'
export const store = configureStore({
	reducer: {
		repos: reposReducer,
		[reposAPI.reducerPath]: reposAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reposAPI.middleware),
})
