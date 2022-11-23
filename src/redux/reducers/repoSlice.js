import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	data: [],
	open: false,
	currentData: [],
	selectedData: [],
}
const repoSlice = createSlice({
	name: 'repo',
	initialState,
	reducers: {
		addReposData: (state, action) => {
			state.data = action.payload
		},
		toggleOpen: (state) => {
			state.open = !state.open
		},
		setCurrentData: (state, action) => {
			state.currentData = action.payload
		},
		setSelectedData: (state, action) => {
			state.selectedData = action.payload
		},
	},
})
export const { addReposData, toggleOpen, setCurrentData, setSelectedData } = repoSlice.actions
export default repoSlice.reducer
