import React from 'react'
import Header from '../Header'
import Sider from '../Sider'
const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className='w-screen h-screen'>
				<div className='flex '>
					<div className='w-[320px]'>
						<Sider />
					</div>
					<div className='w-[calc(100vw-320px)]'>{children}</div>
				</div>
			</div>
		</>
	)
}

export default Layout
