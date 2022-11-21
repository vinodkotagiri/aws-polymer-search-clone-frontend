import React from 'react'
import Home from './pages/Home'
import Insights from './pages/Insights'
import ErrorPage from './pages/404'
import { Route, Routes } from 'react-router-dom'
const App = () => {
	return (
		<div className='bg-gray-100'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/insights' element={<Insights />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
