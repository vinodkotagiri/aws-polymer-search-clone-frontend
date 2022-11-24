import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import useClickOutside from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOpen, setSelectedData } from '../../redux/reducers/repoSlice'
import FilterdItemNames from '../FilterItemNames'
const FilterModal = () => {
	const [active, setActive] = useState(false)
	const [search, setSearch] = useState('')
	const [selectedItems, setSelectedItems] = useState([])
	const dispatch = useDispatch()
	const ref = useRef(null)
	useClickOutside(ref, () => setActive(false))
	const data = useSelector((state) => state.repos.currentData)
	const filteredData = data ? data.data.filter((item, index) => item.data.includes(search)) : []
	useEffect(() => {
		dispatch(setSelectedData(selectedItems))
	}, [selectedItems])
	return (
		<div className='w-[96%] h-[420px] rounded-xl pb-3  overflow-x-hidden overflow-y-scroll bg-white sticky top-[25%] left-[300px]'>
			<div className='sticky left-0 top-0 bg-white z-50'>
				<div className='flex items-center- justify-between'>
					<p className='text-lg font-semibold px-3 py-6'>{data.title}</p>
					<p
						className='text-lg  text-gray-500 cursor-pointer font-semibold px-3 py-6'
						onClick={() => dispatch(toggleOpen())}>
						Close
					</p>
				</div>
				<div className='w-full bg-gray-100 h-14 flex items-center justify-between px-12'>
					<div className='flex  cursor-pointer items-center gap-1'>
						<div
							ref={ref}
							className={`flex items-center border-2 ${active ? 'border-blue-500' : ''} px-2 bg-white rounded-md`}
							onClick={() => {
								setActive(true)
							}}>
							<FiSearch size={16} className='text-gray-600' />
							<input
								className='h-8 outline-none pl-3'
								placeholder='Search'
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex mt-3 mx-3 gap-2 flex-wrap '>
				{filteredData.map((item, index) => (
					<FilterdItemNames key={index} item={item} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
				))}
			</div>
		</div>
	)
}

export default FilterModal
