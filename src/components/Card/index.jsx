import React from 'react'
import { MdOpenInNew } from 'react-icons/md'
import { FiLink2 } from 'react-icons/fi'
import toast from 'react-hot-toast'
const Card = ({ data }) => {
	return (
		<div className='w-[400px] w-min-[362px] border-2 shadow-md bg-white p-3 flex flex-col gap-4 rounded-xl flex-grow-1'>
			<p className='text-xl font-semibold text-gray-700'>{data.categories.name}</p>
			<p className='text-xs text-gray-600 font-semibold'>{data.categories.description}</p>
			<div className='flex gap-5 mt-3'>
				<button
					className='flex gap-1 items-center border-[1px] px-3 rounded-lg text-sm font-semibold'
					onClick={() => window.open(`${data.link}`, '_blank')}>
					<MdOpenInNew />
					GitHub Repo
				</button>
				<button
					className='flex gap-1 items-center border-[1px] px-3 rounded-lg text-sm font-semibold'
					onClick={() => {
						navigator.clipboard.writeText(`${data.link}`)
						toast.success('Copied to clipboard')
					}}>
					<FiLink2 />
					Share
				</button>
			</div>
			<hr />
			<div className='flex flex-col mt-3 px-4  gap-4 pb-6 '>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Stars:</div>
					<div className='text-xs font-semibold'>{data.numericals.stars}</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Search Keywords:</div>
					<div className='text-xs font-semibold text-left'>
						{data.categories.searchKeyWords.join(',') ? data.categories.searchKeyWords.join(',') : data.categories.name}
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-xs font-semibold text-gray-600'>Language</div>
					<div className='text-xs font-semibold text-left'>
						{data.categories.language ? data.categories.language : 'Others'}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
