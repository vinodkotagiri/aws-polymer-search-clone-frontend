import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOpen, setCurrentData } from '../../redux/reducers/repoSlice'
const NumericalItems = ({ data }) => {
	const {
		has_issues,
		has_projects,
		has_downloads,
		has_wiki,
		has_pages,
		has_discussions,
		archived,
		disabled,
		allow_forking,
		is_template,
		signoff_required,
	} = data
	const dispatch = useDispatch()
	const has_issuesArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const has_projectsArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const has_downloadsArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const has_wikiArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const has_pagesArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const has_discussionsArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const is_templateArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const archivedArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const disabledArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const allow_forkingArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))
	const signoff_requiredArr = has_issues.map((item) => ({ _id: item._id, data: item.data }))

	return (
		<>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-blue-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Issues', data: has_issuesArr }))
					}}>
					<div>Has Issues</div>
					<div>{has_issues?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-red-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Issues', data: has_projectsArr }))
					}}>
					<div>Has Projects</div>
					<div>{has_projects?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-green-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Downloads', data: has_downloadsArr }))
					}}>
					<div>Has Downloads</div>
					<div>{has_downloads?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-yellow-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Wiki', data: has_wikiArr }))
					}}>
					<div>Has Wiki</div>
					<div>{has_wiki?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-cyan-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Pages', data: has_pagesArr }))
					}}>
					<div>Has Pages</div>
					<div>{has_pages?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-orange-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Has Discussions', data: has_discussionsArr }))
					}}>
					<div>Has Discussions</div>
					<div>{has_discussions?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-amber-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Archived', data: archivedArr }))
					}}>
					<div>Archived</div>
					<div>{archived?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-red-300 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Disabled', data: disabledArr }))
					}}>
					<div>Disabled</div>
					<div>{disabled?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-gray-500 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Allow Forking', data: allow_forkingArr }))
					}}>
					<div>Allow Forking</div>
					<div>{allow_forking?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-slate-800 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Is Templated', data: is_templateArr }))
					}}>
					<div>Is Template</div>
					<div>{is_template?.length - 25}+</div>
				</div>
			</div>
			<div className='bg-white mx-2 flex items-center  cursor-pointer'>
				<div className='w-[6px] bg-green-800 h-10 rounded-l-md' />
				<div
					className='flex justify-between flex-1 px-3 text-xs text-gray-600 font-medium cursor-pointer'
					onClick={() => {
						dispatch(toggleOpen())
						dispatch(setCurrentData({ type: 'booleans', title: 'Commit Signoff Required', data: signoff_requiredArr }))
					}}>
					<div>Commit Signoff Required</div>
					<div>{signoff_required?.length - 25}+</div>
				</div>
			</div>
		</>
	)
}

export default NumericalItems
