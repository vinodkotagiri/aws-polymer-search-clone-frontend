import React from 'react'

const SiderItem = ({ data }) => {
	const colors = ['#EA047E', '#FF6D28', '#FCE700', '#00F5FF', '#38E54D', '#D800A6', '#293462']
	return (
		<div className='flex items-center text-xs font-medium text-gray-700 cursor-pointer'>
			<div
				className={` w-[6px] h-8 rounded-l-md`}
				style={{ backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }}
			/>
			<div className='flex flex-1 px-3 bg-white py-1 rounded-r-md h-8 items-center'>
				<div className='flex-1'>{data.name}</div>
				<div>{data.data.length - 25}+</div>
			</div>
		</div>
	)
}

export default SiderItem
