import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOpen, setCurrentData } from '../../redux/reducers/repoSlice'
const NumericalItems = ({ data }) => {
	const { stars, forks, watchers, openIssues } = data
	const dispatch = useDispatch()
	const starArr = stars.map((item) => ({ _id: item._id, data: item.data }))
	const forksArr = forks.map((item) => ({ _id: item._id, data: item.data }))
	const watchersArr = watchers.map((item) => ({ _id: item._id, data: item.data }))
	const openIssuesArr = openIssues.map((item) => ({ _id: item._id, data: item.data }))
	return (
		<>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'numericals', title: 'Stars', data: starArr }))
					}}>
					<div>Stars</div>
					<div>{stars?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'numericals', title: 'Forks', data: forksArr }))
					}}>
					<div>Forks</div>
					<div>{stars?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'numericals', title: 'Watchers', data: watchersArr }))
					}}>
					<div>Watchers</div>
					<div>{watchers?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'numericals', title: 'Open Issues', data: openIssuesArr }))
					}}>
					<div>Open Issues</div>
					<div>{watchers?.length - 25}+</div>
				</div>
			</div>
		</>
	)
}

export default NumericalItems
