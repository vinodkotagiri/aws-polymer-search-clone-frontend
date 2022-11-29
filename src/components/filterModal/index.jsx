/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../helpers/useClickOutside'
import { useSelector, useDispatch } from 'react-redux'
import { addSelectedData } from '../../redux/reducers/repo'
const FilterModal = ({ filters }) => {
	const [searchSelected, setSearchSelected] = useState(false)
	const [selectedFilters, setSelectedFilters] = useState([])
	const dispatch = useDispatch()
	const searchRef = useRef(null)
	const reposData = useSelector((state) => state.repos.repos)
	useClickOutSide(searchRef, () => setSearchSelected(false))
	const handleSelection = (selection) => {
		let filteredData
		if (filters.slug === 'license') {
			filteredData = reposData.filter((data) => data.license?.name === selection.item)
		} else if (filters.slug === 'topics') {
			filteredData = reposData.filter(
				(data) =>
					data.topics.join(',').split(',').includes(selection.item) ||
					data.topics.join(',').split(',') == selection.item
			)
		} else if (filters.slug === '') {
			filteredData = reposData.filter((data) => data.name.split('-').join(',') === selection.item)
		} else if (filters.slug === 'created_at' || filters.slug === 'updated_at' || filters.slug === 'pushed_at') {
			filteredData = reposData.filter(
				(data) => new Date(`${data.created_at}`).toLocaleString().split(',')[0] == '23/3/2010'
			)
		} else {
			filteredData = reposData.filter((data) => `${data[filters.slug]}` == selection.item)
			setSelectedFilters(filteredData)
		}
	}
	const handleChange = () => {}
	useEffect(() => {
		dispatch(addSelectedData(selectedFilters))
	}, [selectedFilters])
	return (
		<div className='w-[95%] h-[420px] rounded-lg shadow-lg bg-white  overflow-y-scroll'>
			<div className='text-xl font-medium h-12 w-full px-2  flex items-center sticky top-0 left-0 bg-white z-10'>
				{filters?.name}
			</div>
			{/* <div className='w-full h-[76px] bg-gray-200 flex items-center justify-between px-6 sticky top-[48px]'>
				<div className='flex items-center gap-3'>
					<div
						ref={searchRef}
						className={`flex px-1 py-4 items-center my-4 ml-4 h-10 bg-white border-[1px] rounded-lg ${
							searchSelected ? 'border-blue-500' : ''
						}`}
						onClick={() => setSearchSelected(true)}
						onChange={handleChange}>
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
			</div> */}
			<div className='p-3 flex  gap-2 flex-wrap '>
				{filters &&
					filters?.items.map((item, index) => (
						<div
							key={index}
							className='bg-blue-300 px-3 rounded-full text-gray-800 text-sm flex gap-3 my-1 cursor-pointer hover:bg-blue-400'
							onClick={() => {
								handleSelection(item)
							}}>
							<div>{item.item}</div>
							<div className='font-semibold'>{item.count}</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default FilterModal
