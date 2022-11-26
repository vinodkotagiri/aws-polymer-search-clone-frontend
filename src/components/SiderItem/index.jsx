import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { processData } from '../../helpers/processData'
import { addFiltersData, removeFiltersData, toggleOpen } from '../../redux/reducers/repo'
const SiderItem = ({ data }) => {
	const [dataItems, setDataItems] = useState({})
	const [selected, setSelected] = useState(false)
	const filters = useSelector((state) => state.repos.filters)

	const dispatch = useDispatch()

	useEffect(() => {
		setDataItems(processData(data))
	}, [data])

	const handleItemClick = () => {
		if (!selected && filters === null) {
			dispatch(addFiltersData(dataItems))
			dispatch(toggleOpen())
			setSelected(!selected)
		} else {
			dispatch(removeFiltersData())
			dispatch(toggleOpen())
			setSelected(!selected)
		}
	}

	const colors = ['#EA047E', '#FF6D28', '#FCE700', '#00F5FF', '#38E54D', '#D800A6', '#293462']
	return (
		<>
			{dataItems.items && (
				<div className='flex items-center text-xs font-medium text-gray-700 cursor-pointer' onClick={handleItemClick}>
					<div
						className={` w-[6px] h-8 rounded-l-md`}
						style={{ backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }}
					/>
					<div
						className={`flex flex-1 px-3 ${!selected ? 'bg-white' : 'bg-gray-500'} py-1 rounded-r-md h-8 items-center`}>
						<div className='flex-1'>{dataItems.name}</div>
						<div className='text-xs'>
							{dataItems?.items?.length}&emsp;
							{!selected ? '+' : '-'}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
// {dataItems?.items.length}

export default SiderItem
