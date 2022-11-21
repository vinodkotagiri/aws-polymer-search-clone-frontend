import React from 'react'
import Header from '../Header'
import Sider from '../Sider'
const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className='flex'>
				<Sider />
				{children}
			</div>
		</>
	)
}

export default Layout
