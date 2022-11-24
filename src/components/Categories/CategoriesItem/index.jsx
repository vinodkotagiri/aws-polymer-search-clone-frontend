import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOpen, setCurrentData } from '../../redux/reducers/repoSlice'
const CategoriesItem = ({ data }) => {
	const { serviceNames, language, license, owner, searchKeywords, topics } = data
	const dispatch = useDispatch()
	const catArr = serviceNames.map((item) => ({ _id: item._id, data: item.data }))
	const lanArr = language.map((item) => ({ _id: item._id, data: item.data }))
	const licArr = license.map((item) => ({ _id: item._id, data: item.data }))
	const ownArr = owner.map((item) => ({ _id: item._id, data: item.data }))
	const seaArr = searchKeywords.map((item) => ({ _id: item._id, data: item.data }))
	const topArr = topics.map((item) => ({ _id: item._id, data: item.data.join(',').split(',') }))
	return (
		<>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'Service Names', data: catArr }))
					}}>
					<div>Service Names</div>
					<div>{serviceNames?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-purple-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'Languages', data: lanArr }))
					}}>
					<div>Languages</div>
					<div>{language?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-indigo-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'License', data: licArr }))
					}}>
					<div>license</div>
					<div>{license?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-green-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'Owner', data: ownArr }))
					}}>
					<div>Owner</div>
					<div>{owner?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-yellow-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'Search Keywords', data: seaArr }))
					}}>
					<div>Search Keywords</div>
					<div>{searchKeywords?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-orange-500 h-10 rounded-l-md'></div>
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ title: 'Topics', data: topArr }))
					}}>
					<div>Topics</div>
					<div>{topics?.length - 25}+</div>
				</div>
			</div>
		</>
	)
}

export default CategoriesItem
