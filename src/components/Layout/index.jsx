import React from 'react'
import Header from '../Header'
import Sider from '../Sider'
const Layout = ({ children }) => {
	return (
		<div className='w-screeen h-screen'>
			<Header />
			<div className='flex '>
				<div className='w-[20%]'>
					<Sider />
				</div>
				<div className='flex-1'>{children}</div>
			</div>
		</div>
	)
}

export default Layout
