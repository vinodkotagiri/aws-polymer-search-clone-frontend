import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	repos: [],
	categories: [],
	numericals: [],
	links: [],
	booleans: [],
	dates: [],
}
const repoSlice = createSlice({
	name: 'repo',
	initialState,
	reducers: {
		addReposData: (state, action) => {
			state.repos = action.payload
		},
		addCategoriesData: (state, action) => {
			state.categories = action.payload
		},
		addNumericalsData: (state, action) => {
			state.numericals = action.payload
		},
		addDatesData: (state, action) => {
			state.dates = action.payload
		},
		addLinksData: (state, action) => {
			state.links = action.payload
		},
		addBooleansData: (state, action) => {
			state.booleans = action.payload
		},
	},
})
export const { addReposData, addCategoriesData, addNumericalsData, addLinksData, addDatesData, addBooleansData } =
	repoSlice.actions
export default repoSlice.reducer
