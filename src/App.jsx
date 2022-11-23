import React from 'react'
import Home from './pages/Home'
import Insights from './pages/Insights'
import ErrorPage from './pages/404'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const App = () => {
	return (
		<div className='bg-gray-100'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/insights' element={<Insights />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Toaster position='top-center' reverseOrder={false} />
		</div>
	)
}

export default App
