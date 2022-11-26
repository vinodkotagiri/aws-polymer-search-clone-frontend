import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	repos: null,
	categories: null,
	numericals: null,
	links: null,
	booleans: null,
	dates: null,
	filters: null,
	selectedData: [],
	open: false,
	chartData: {},
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
		addSelectedData: (state, action) => {
			state.filters.push(action.payload)
		},
		removeSelectedData: (state) => {},
		toggleOpen: (state) => {
			state.open = !state.open
		},
		setChartData: (state, action) => {
			state.chartData = action.payload
		},
		removeChartData: (state) => {
			state.chartData.x = []
			state.chartData.y = []
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
	addSelectedData,
	toggleOpen,
	setChartData,
	removeChartData,
} = repoSlice.actions
export default repoSlice.reducer
