import React, { useEffect, useRef, useState } from 'react'
import awsLogo from '../../assets/images/aws_logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useNavigate, Link } from 'react-router-dom'
import { ReactComponent as DataLogo } from '../../assets/svg/datagrid.svg'
import { ReactComponent as InsightsLogo } from '../../assets/svg/insights.svg'
const Header = () => {
	const [active, setActive] = useState({ data: true, insights: false })
	const [openSideMenu, setOpenSideMenu] = useState(false)
	const navigate = useNavigate()

	const handleActive = (e) => {
		if (e.target.innerText === 'Data') setActive({ data: true, insights: false })
		else setActive({ insights: true, data: false })
		if (!active.data && active.insights) navigate('/')
		else navigate('/insights')
	}

	return (
		<nav className='w-full h-14 flex items-center shadow-sm border-2 pr-3 bg-gray-50 sticky top-0 left-0 z-50'>
			<Link to='/' className='border-r-2 h-full flex items-center justify-center w-14 cursor-pointer'>
				<img src={awsLogo} alt='logo' className='p-4 w-14' />
			</Link>
			<div className='border-r-2 h-full flex items-center justify-left px-4 font-medium text-sm flex-1 md:w-[16%]'>
				<p>Everything AWS</p>
			</div>
			<div className='h-full flex items-center justify-between flex-1'>
				<div className='md:flex gap-4 px-12 items-center hidden'>
					<button
						className={`flex items-center gap-2 text-sm p-1 px-2 rounded-full ${
							active.data ? 'bg-black text-white' : ''
						}`}
						onClick={handleActive}>
						<DataLogo className='h-6' fill={`${active.data ? 'white' : ''}`} />
						Data
					</button>
					<button
						className={`flex items-center gap-2 text-sm p-1 px-2 rounded-full  ${
							active.insights ? 'bg-black text-white' : ''
						}`}
						onClick={handleActive}>
						<InsightsLogo className='h-6' fill={`${active.insights ? 'white' : ''}`} />
						Insights
					</button>
				</div>
				<div className='px-4 border-b-2 hidden md:flex'>
					<button
						className=' bg-blue-700 h-8 flex items-center text-sm text-white px-4 rounded-md hover:bg-black gap-2'
						onClick={() => window.open('https://www.polymersearch.com', '_blank')}>
						<img
							className='w-5'
							src='https://cdn.polymersearch.com/assets/img/polymer-logo-animated-white-64px-2.a6f7303b.gif'
							alt='pol-logo'
						/>
						Built with Polymer
					</button>
				</div>
			</div>
			<AiOutlineMenu size={24} className='md:hidden float-right mr-3' onClick={() => setOpenSideMenu(true)} />
			<div
				className={`md:hidden w-[200px] h-screen bg-white absolute top-0 right-0 px-1 flex ${
					openSideMenu ? 'right-0' : 'right-[-200px]'
				} ease-in-out duration-300`}>
				<AiOutlineClose
					size={20}
					className='text-gray-500 absolute top-1 left-1 cursor-pointer'
					onClick={() => setOpenSideMenu(false)}
				/>
				<button
					className=' bg-blue-700 h-8 flex items-center text-sm text-white px-4 rounded-md hover:bg-black gap-2 mt-20'
					onClick={() => window.open('https://www.polymersearch.com', '_blank')}>
					<img
						className='w-5'
						src='https://cdn.polymersearch.com/assets/img/polymer-logo-animated-white-64px-2.a6f7303b.gif'
						alt='pol-logo'
					/>
					Built with Polymer
				</button>
			</div>
		</nav>
	)
}

export default Header
