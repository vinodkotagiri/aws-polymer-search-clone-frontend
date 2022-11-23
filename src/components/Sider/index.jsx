import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { CgCalendarDates } from 'react-icons/cg'
import { AiOutlineLink } from 'react-icons/ai'
import animatedPolymerLogo from '../../assets/images/animated-polymer-logo.gif'
import { useGetReposDataQuery } from '../../redux/reducers/reposAPI'
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addReposData } from '../../redux/reducers/repoSlice'
import Categories from '../Categories'
const Sider = () => {
	const [loading, setLoading] = useState(false)

	const { data, isLoading } = useGetReposDataQuery()
	const dispatch = useDispatch()
	useEffect(() => {
		if (isLoading) {
			setLoading(true)
		} else setLoading(false)
		if (data) dispatch(addReposData(data))
	}, [isLoading, data])

	return (
		<div className='w-[20vw] h-screen border-r-2 overflow-y-scroll sticky left-0 top-0 flex flex-col'>
			{loading ? (
				<Loader size='small' />
			) : (
				<>
					{/* SEARCH BAR START */}
					<div className='h-12  bg-white m-2 rounded-lg border-[1px] border-blue-500 flex items-center'>
						<div className='p-2'>
							<FiSearch size={24} className='text-gray-500' />
						</div>
						<div className='flex-1 px-1'>
							<input
								className='w-full outline-none placeholder:text-sm placeholder:tracking-wider '
								placeholder='Search'
							/>
						</div>
					</div>
					{/* SEARCH BAR END */}
					{/* CATEGORIES START */}
					<div className='mt-3'>
						<div className='flex items-center px-3'>
							<div className='rounded-full flex text-xs font-semibold items-center justify-center border-2 border-gray-500 text-gray-500 w-4 h-4'>
								A
							</div>
							<div className='mx-2 text-xs font-semibold'>Categories</div>
						</div>
					</div>
					<div className='flex flex-col mt-2 gap-1'>
						<Categories />
					</div>
					{/* CATEGORIES END */}
					{/* NUMERICALS START */}
					<div className='mt-3'>
						<div className='flex items-center px-3'>
							<div className='rounded-full flex text-xs font-semibold items-center justify-center border-2 border-gray-500 text-gray-500 w-4 h-4'>
								#
							</div>
							<div className='mx-2 text-xs font-semibold'>Numericals</div>
						</div>
					</div>
					<div className='flex flex-col mt-2 gap-1'></div>
					{/* NUMERICALS END */}
					{/* BOOLEANS START */}
					<div className='mt-3'>
						<div className='flex items-center px-3'>
							<div className='rounded-full flex text-xs font-semibold items-center justify-center border-2 border-gray-500 text-gray-500 w-4 h-4'>
								0
							</div>
							<div className='mx-2 text-xs font-semibold'>Booleans</div>
						</div>
					</div>
					<div className='flex flex-col mt-2 gap-1'></div>
					{/* BOOLEANS END */}
					{/* DATES START */}
					<div className='mt-3'>
						<div className='flex items-center px-3'>
							<CgCalendarDates className='text-gray-500' />
							<div className='mx-2 text-xs font-semibold'>Dates</div>
						</div>
					</div>
					<div className='flex flex-col mt-2 gap-1'></div>
					{/* DATES END */}
					{/* LINKS START */}
					<div className='mt-3'>
						<div className='flex items-center px-3'>
							<AiOutlineLink className='text-gray-500' />
							<div className='mx-2 text-xs font-semibold'>Links</div>
						</div>
					</div>
					<div className='flex flex-col mt-2 mb-2 gap-1'></div>
					{/* LINKS END */}
					<div className='w-full flex items-center justify-center'>
						<button
							className='outline-none  mt-6 mb-3  px-1 rounded-lg py-2 flex gap-1 items-center text-white bg-blue-600 hover:bg-black'
							onClick={() => window.open('https://www.polymersearch.com/', '_blank')}>
							<img src={animatedPolymerLogo} alt='logo' className='h-5' />
							Built with Polymer
						</button>
					</div>
					<div className='text-center mb-6 font-semibold text-gray-600'>
						{new Date().toString().split(' ').splice(1, 4).join(' ')}
					</div>
				</>
			)}
		</div>
	)
}

export default Sider
