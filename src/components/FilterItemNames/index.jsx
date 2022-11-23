import React, { useState } from 'react'
const FilterdItemNames = ({ item, selectedItems, setSelectedItems }) => {
	const [selected, setSelected] = useState(false)
	return (
		<div
			className={`pl-6 pr-1 text-blue-500 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-green-300 flex items-center ${
				selected ? 'bg-red-300' : ''
			}`}
			onClick={(e) => {
				setSelected(!selected)
				if (!selected) {
					console.log('selected')
					setSelectedItems([...selectedItems, item._id])
				} else {
					console.log('deselected')
					const newItems = selectedItems.filter((s) => s !== item._id)
					setSelectedItems(newItems)
				}
			}}>
			<p>{item.data}</p>
		</div>
	)
}

export default FilterdItemNames
