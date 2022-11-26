import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useGetReposDataQuery } from './redux/reducers/apiCore'
import { addReposData } from './redux/reducers/repo'
import { useDispatch } from 'react-redux'
import HomePage from './pages/Home'
import InsightsPage from './pages/Insights'
const App = () => {
	const { data } = useGetReposDataQuery()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(addReposData(data))
	}, [data])
	return (
		<div className='overflow-x-hidden'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/insights' element={<InsightsPage />} />
			</Routes>
		</div>
	)
}

export default App
