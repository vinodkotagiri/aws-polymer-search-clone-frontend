import React from 'react'

const SiderItem = ({ data, color }) => {
	return (
		<div className='bg-white mx-2 flex items-center cursor-pointer'>
			<div className='w-[6px] bg-blue-500 h-10 rounded-l-md'></div>
			<div className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium'>
				<div>Service Name</div>
				<div>168 +</div>
			</div>
		</div>
	)
}

export default SiderItem
