import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { CgCalendarDates } from 'react-icons/cg'
import { AiOutlineLink } from 'react-icons/ai'
import animatedPolymerLogo from '../../assets/images/animated-polymer-logo.gif'
const Sider = () => {
	return (
		<div className='w-[20vw] h-screen border-r-2 overflow-y-scroll sticky left-0 top-[calc(100vh-3.5rem)] flex flex-col'>
			{/* SEARCH BAR START */}
			<div className='h-12  bg-white m-2 rounded-lg border-[1px] border-blue-500 flex items-center'>
				<div className='p-2'>
					<FiSearch size={24} className='text-gray-500' />
				</div>
				<div className='flex-1 px-1'>
					<input className='w-full outline-none placeholder:text-sm placeholder:tracking-wider ' placeholder='Search' />
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
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-blue-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Service Name</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-red-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Language</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-purple-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Topics</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-indigo-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Search Keywords</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-pink-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>License Name</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-pink-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Owner</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-amber-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Repository Type</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-cyan-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>AWS-Verified</div>
						<div>168 +</div>
					</div>
				</div>
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
			<div className='flex flex-col mt-2 gap-1'>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-purple-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Stars</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-indigo-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Forks</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-pink-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Watchers</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-amber-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Commits</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-cyan-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Contributors</div>
						<div>168 +</div>
					</div>
				</div>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-green-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Open Issues</div>
						<div>168 +</div>
					</div>
				</div>
			</div>
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
			<div className='flex flex-col mt-2 gap-1'>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-purple-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Dates</div>
						<div>168 +</div>
					</div>
				</div>
			</div>
			{/* BOOLEANS END */}
			{/* DATES START */}
			<div className='mt-3'>
				<div className='flex items-center px-3'>
					<CgCalendarDates className='text-gray-500' />
					<div className='mx-2 text-xs font-semibold'>Booleans</div>
				</div>
			</div>
			<div className='flex flex-col mt-2 gap-1'>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-orange-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Last Updated</div>
						<div>168 +</div>
					</div>
				</div>
			</div>
			{/* DATES END */}
			{/* LINKS START */}
			<div className='mt-3'>
				<div className='flex items-center px-3'>
					<AiOutlineLink className='text-gray-500' />
					<div className='mx-2 text-xs font-semibold'>Booleans</div>
				</div>
			</div>
			<div className='flex flex-col mt-2 mb-2 gap-1'>
				<div className='bg-white mx-2 flex items-center'>
					<div className='w-[6px] bg-orange-500 h-10 rounded-l-md'></div>
					<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
						<div>Repo Link</div>
						<div>168 +</div>
					</div>
				</div>
			</div>
			{/* LINKS END */}
			<button
				className='outline-none mx-12 mt-6 mb-3 w-auto px-1 rounded-lg py-2 flex gap-1 items-center text-white bg-blue-600 hover:bg-black'
				onClick={() => window.open('https://www.polymersearch.com/', '_blank')}>
				<img src={animatedPolymerLogo} alt='logo' className='h-5' />
				Built with Polymer
			</button>
			<div className='text-center mb-6 font-semibold text-gray-600'>
				{new Date().toString().split(' ').splice(1, 4).join(' ')}
			</div>
		</div>
	)
}

export default Sider
