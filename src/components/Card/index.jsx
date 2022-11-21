import React from 'react'
import { MdOpenInNew } from 'react-icons/md'
import { FiLink2 } from 'react-icons/fi'
const Card = () => {
	return (
		<div className='w-[400px] w-min-[362px] border-2 shadow-md bg-white p-3 flex flex-col gap-4 rounded-xl flex-grow-1'>
			<p className='text-xl font-semibold text-gray-700'>aws-cli</p>
			<p className='text-xs text-gray-600 font-semibold'>Universal Command Line Interface for Amazon Web Services</p>
			<div className='flex gap-5 mt-3'>
				<button className='flex gap-1 items-center border-[1px] px-3 rounded-lg text-sm font-semibold'>
					<MdOpenInNew />
					GitHub Repo
				</button>
				<button className='flex gap-1 items-center border-[1px] px-3 rounded-lg text-sm font-semibold'>
					<FiLink2 />
					Share
				</button>
			</div>
			<hr />
			<div className='flex flex-col mt-3 px-4 pr-20 gap-4 pb-6 '>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Stars:</div>
					<div className='text-xs font-semibold'>10,922</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Search Keywords:</div>
					<div className='text-xs font-semibold'>amazon-s3</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Language</div>
					<div className='text-xs font-semibold'>Python</div>
				</div>
			</div>
		</div>
	)
}

export default Card
