import React, { useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiFillMinusCircle, AiFillCheckCircle } from 'react-icons/ai'
import useClickOutside from '../../hooks/useClickOutside'
const FilterModal = () => {
	const [active, setActive] = useState(false)
	const [remove, setRemove] = useState(false)
	const [selected, setSelected] = useState(false)
	const ref = useRef(null)
	useClickOutside(ref, () => setActive(false))
	return (
		<div className='w-[96%] h-[420px] rounded-xl  overflow-y-scroll bg-white absolute top-[15%] left-[2%]'>
			<div className='sticky left-0 top-0 bg-white '>
				<p className='text-lg font-semibold px-3 py-6'>Service Name</p>
				<div className='w-full bg-gray-100 h-14 flex items-center justify-between px-12'>
					<div className='flex  cursor-pointer items-center gap-1'>
						<div
							ref={ref}
							className={`flex items-center border-2 ${active ? 'border-blue-500' : ''} px-2 bg-white rounded-md`}
							onClick={() => setActive(true)}>
							<FiSearch size={16} className='text-gray-600' />
							<input className='h-8 outline-none pl-3' placeholder='Search' />
						</div>
						<p className='text-sm font-semibold '>Select All</p>
					</div>
					<select className='p-2 font-semibold rounded-md border-2 w-[120px] cursor-pointer'>
						<option>Sort By</option>
					</select>
				</div>
			</div>
			<div className='flex mt-3 mx-3 gap-2 flex-wrap cursor-pointer'>
				<div
					className='pl-6 pr-1 text-blue-500 bg-gray-200 rounded-lg relative hover:bg-gray-300 flex items-center'
					onMouseEnter={() => setRemove(true)}
					onMouseOut={() => setRemove(false)}
					onClick={() => setSelected(!selected)}>
					<p>Hello</p>
					{selected && <AiFillCheckCircle className='ml-2 text-gray-400' />}
					{remove && <AiFillMinusCircle className='absolute top-[-4px] right-[-4px] text-gray-500' />}
				</div>
			</div>
		</div>
	)
}

export default FilterModal
