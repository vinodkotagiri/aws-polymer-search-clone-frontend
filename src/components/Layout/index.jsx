import React from 'react'
import Header from '../Header'
import Sider from '../Sider'
import InsightSider from '../InsightSider'
const Layout = ({ children, src }) => {
	return (
		<>
			<Header />
			<div className='w-screen h-screen'>
				<div className='flex '>
					<div className='w-[320px]'>{src === 'insights' ? <InsightSider /> : <Sider />}</div>
					<div className='w-[calc(100vw-320px)]'>{children}</div>
				</div>
			</div>
		</>
	)
}

export default Layout
