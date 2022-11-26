import React from 'react'
import { IoMdOpen, IoMdLink } from 'react-icons/io'
const Card = ({ data, setShowCopyModal }) => {
	//Function to handle copy link to clipboard
	function handleShare() {
		navigator.clipboard.writeText(data.clone_url)
		setShowCopyModal(true)
		setTimeout(() => {
			setShowCopyModal(false)
		}, 2000)
	}
	return (
		<>
			<div className='w-[360px]  bg-white rounded-md shadow-md p-3 flex flex-col'>
				<p className='py-2 px-3 text-md tracking-wide font-medium text-gray-700 '>{data.name}</p>
				<p className='px-3 text-xs font-medium text-gray-600 mb-3'>{data.description}</p>
				<div className='flex text-gray-900 justify-start text-sm font-medium mt-6 gap-6'>
					<button
						className='flex items-center gap-1 border-[2px] px-2 rounded-md'
						onClick={() => window.open(`${data.clone_url}`, '_blank')}>
						<IoMdOpen size={18} />
						<p>GitHub Repo</p>
					</button>
					<button className='flex items-center gap-1 border-[1px] px-2 rounded-md' onClick={handleShare}>
						<IoMdLink size={18} />
						<p>Share</p>
					</button>
				</div>
				<hr className='my-3' />
				<div className='flex flex-col gap-4'>
					<div className='flex items-center justify-between px-4'>
						<small className='text-gray-700 font-medium'>Stars:</small>
						<small className='text-gray-700 font-medium'>{data.stargazers_count}</small>
					</div>
					<div className='flex items-center justify-between px-4'>
						<small className='text-gray-700 font-medium mb-3'>Serch keywords:</small>
						<small className='text-gray-700 font-medium flex gap-2 flex-wrap justify-end'>
							{data.name.split('-').map((k, i) => (
								<small
									key={i}
									className='bg-purple-200 text-blue-500 px-3 rounded-full py-1 cursor-pointer hover:bg-purple-300'>
									{k}
								</small>
							))}
						</small>
					</div>
					<div className='flex items-center justify-between px-4 '>
						<small className='text-gray-700 font-medium'>Language:</small>
						<small className=' font-medium bg-red-100 px-3 rounded-xl py-[2px] text-red-900 cursor-pointer hover:bg-red-300'>
							{data.language ? data.language : 'N/A'}
						</small>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
