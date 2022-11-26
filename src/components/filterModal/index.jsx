import React, { useRef, useState } from 'react'
import useClickOutSide from '../../helpers/useClickOutside'
import { FiSearch } from 'react-icons/fi'
const FilterModal = ({ filters }) => {
	const [searchSelected, setSearchSelected] = useState(false)
	const searchRef = useRef(null)
	useClickOutSide(searchRef, () => setSearchSelected(false))
	const handleSelection=(item)=>{

	}
	return (
		<div className='w-[95%] h-[420px] rounded-lg shadow-lg bg-white  overflow-y-scroll'>
			<div className='text-xl font-medium h-12 w-full px-2  flex items-center sticky top-0 left-0 bg-white z-10'>
				{filters.name}
			</div>
			<div className='w-full h-[76px] bg-gray-200 flex items-center justify-between px-6 sticky top-[48px]'>
				<div className='flex items-center gap-3'>
					<div
						ref={searchRef}
						className={`flex px-1 py-4 items-center my-4 ml-4 h-10 bg-white border-[1px] rounded-lg ${
							searchSelected ? 'border-blue-500' : ''
						}`}
						onClick={() => setSearchSelected(true)}>
						<FiSearch className='mx-2 text-gray-700' size={20} />
						<input className='outline-none placeholder:text-sm' placeholder='Search' />
					</div>
					<div className='text-sm cursor-pointer font-semibold'>Select All</div>
				</div>
				<div className='bg-white h-10 flex items-center px-3 rounded-md'>
					<select className='bg-transparent outline-none'>
						<option>Sort by</option>
					</select>
				</div>
			</div>
			<div className='p-3 flex  gap-2 flex-wrap '>
				{filters.items.map((item, index) => (
					<div className='bg-blue-300 px-3 rounded-full text-gray-800 text-sm flex gap-3 my-1 cursor-pointer hover:bg-blue-400' onClick={()=>{handleSelection(item.item)}}>
						<div>{item.item}</div>
						<div className='font-semibold'>{item.count}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FilterModal
