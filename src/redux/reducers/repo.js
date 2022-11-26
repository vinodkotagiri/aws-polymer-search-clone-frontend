import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	repos: null,
	categories: null,
	numericals: null,
	links: null,
	booleans: null,
	dates: null,
	filters: null,
	selectedFiltersCount: 0,
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
		addFiltersData: (state, action) => {
			state.filters = action.payload
		},
		removeFiltersData: (state) => {
			state.filters = null
		},
		incSelectedFiltersCount: (state) => {
			state.selectedFiltersCount++
		},
		decSelectedFiltersCount: (state) => {
			state.selectedFiltersCount = state.selectedFiltersCount <= 0 ? 0 : state.selectedFiltersCount--
		},
	},
})
export const {
	addReposData,
	addCategoriesData,
	addNumericalsData,
	addLinksData,
	addDatesData,
	addBooleansData,
	addFiltersData,
	removeFiltersData,
	incSelectedFiltersCount,
	decSelectedFiltersCount,
} = repoSlice.actions
export default repoSlice.reducer
