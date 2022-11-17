import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/aws_logo.png'
import { ReactComponent as DataIcon } from '../../assets/svg/data_grid.svg'
import { ReactComponent as InsightsIcon } from '../../assets/svg/insights_chart.svg'
import animatedIcons from '../../assets/images/animated-icons.gif'
import animatedPolymerLogo from '../../assets/images/animated-polymer-logo.gif'
import { FcMenu } from 'react-icons/fc'
import { MdClose } from 'react-icons/md'
import MoreSitesModal from '../../components/MoreSitesModal'
const Header = () => {
	const [isRightMenuVisibe, setIsRightMenuVisibe] = useState(false)
	const [openMoreSitesModal, setOpenMoreSitesModal] = useState(false)
	// useEffect(() => {
	// 	console.log(openMoreSitesModal)
	// }, [openMoreSitesModal])
	return (
		<nav className='w-screen h-14 shadow-md flex items-center gap-2 bg-white sticky top-0 left-0'>
			<div className='border-r-2 h-full flex items-center px-3'>
				<img src={logo} alt='logo' className='w-6' />
			</div>
			<div className='border-r-2 h-full flex items-center justify-start px-3 pr-[7.5rem] font-semibold tracking-wide'>
				<p>Everything AWS</p>
			</div>
			<div className='hidden md:flex items-center justify-between flex-1 mr-6'>
				<div className='bg-gray-50 text-sm font-semibold p-2 mx-3 rounded-full md:flex gap-8 px-3 hidden '>
					<button className='flex items-center gap-2 align-middle'>
						<DataIcon />
						Data
					</button>
					<button className='flex items-center gap-2 align-middle'>
						<InsightsIcon />
						Insights
					</button>
				</div>
				<div className='md:flex gap-6 font-semibold text-sm hidden relative'>
					<button
						className='border-2 px-6 pl-2 rounded-lg py-2  flex gap-1 items-center text-blue-600 hover:bg-blue-600 hover:text-black hover:outline-none hover:border-none'
						onMouseOver={() => setOpenMoreSitesModal(true)}
						onMouseOut={() => setOpenMoreSitesModal(false)}>
						<img src={animatedIcons} alt='logo' className='h-5 animate-pulse duration-300 rounded-full' />
						More Sites
					</button>
					<button
						className='outline-none px-4 pl-2 rounded-lg py-2 flex gap-1 items-center text-white bg-blue-600 hover:bg-black'
						onClick={() => window.open('https://www.polymersearch.com/', '_blank')}>
						<img src={animatedPolymerLogo} alt='logo' className='h-5' />
						Built with Polymer
					</button>
					<MoreSitesModal className='absolute top-0 right-0' />
				</div>
			</div>
			<div className='absolute top-[10px] right-2 md:hidden'>
				<FcMenu size={32} className='cursor-pointer' onClick={() => setIsRightMenuVisibe(!isRightMenuVisibe)} />
			</div>
			{/* RIGHT SIDE MENU ON SMALL SCREENS */}
			{isRightMenuVisibe && (
				<div className='flex flex-col absolute top-0 right-0 h-screen bg-white py-16 px-1 pr-3'>
					<div className='text-gray-700 absolute left-0 top-1'>
						<MdClose size={32} className='cursor-pointer' onClick={() => setIsRightMenuVisibe(!isRightMenuVisibe)} />
					</div>
					<button
						className=' px-4 pl-2 rounded-lg py-2 outline-none flex gap-1 items-center text-white bg-blue-600 hover:bg-black'
						onClick={() => window.open('https://www.polymersearch.com/', '_blank')}>
						<img src={animatedPolymerLogo} alt='logo' className='h-5' />
						Built with Polymer
					</button>
				</div>
			)}
		</nav>
	)
}

export default Header
