/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { ReactComponent as CategoriesLogo } from '../../assets/svg/categoriesLogo.svg'
import { ReactComponent as NumericalsLogo } from '../../assets/svg/numericalsLogo.svg'
import { ReactComponent as UrlsLogo } from '../../assets/svg/urlsLogo.svg'
import { ReactComponent as DatesLogo } from '../../assets/svg/datesLogo.svg'
import { ReactComponent as BooleansLogo } from '../../assets/svg/booleansLogo.svg'
import useClickOutSide from '../../helpers/useClickOutside'
import SiderItem from '../SiderItem'
import {
	addBooleansData,
	addCategoriesData,
	addDatesData,
	addLinksData,
	addNumericalsData,
} from '../../redux/reducers/repo'
import Spinner from '../Spinner'
import {
	useGetCategoriesDataQuery,
	useGetNumericalsDataQuery,
	useGetLinksDataQuery,
	useGetBooleansDataQuery,
	useGetDatesDataQuery,
} from '../../redux/reducers/apiCore'
const Sider = ({ source }) => {
	const [searchSelected, setSearchSelected] = useState(false)
	const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesDataQuery()
	const { data: numericals, isLoading: isNumericalsLoading } = useGetNumericalsDataQuery()
	const { data: links, isLoading: isLinksLoading } = useGetLinksDataQuery()
	const { data: booleans, isLoading: isBooleansLoading } = useGetBooleansDataQuery()
	const { data: dates, isLoading: isDatesLoading } = useGetDatesDataQuery()
	const ref = useRef(null)
	useClickOutSide(ref, () => setSearchSelected(false))
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(addCategoriesData(categories))
		dispatch(addNumericalsData(numericals))
		dispatch(addLinksData(links))
		dispatch(addDatesData(dates))
		dispatch(addBooleansData(booleans))
	}, [categories, numericals, links, dates, booleans])
	return (
		<aside className='w-full border-r-2 h-screen bg-gray-100 flex flex-col pr-6 overflow-y-scroll overflow-x-hidden sticky left-0 top-0 z-[40]'>
			{/* SEARCH BAR */}
			<div
				ref={ref}
				className={`flex px-1 py-4 items-center my-4 ml-4 h-10 bg-white border-[1px] rounded-lg ${
					searchSelected ? 'border-blue-500' : ''
				}`}
				onClick={() => setSearchSelected(true)}>
				<FiSearch className='mx-2 text-gray-700' size={20} />
				<input className='outline-none placeholder:text-sm' placeholder='Search' />
			</div>
			{/* CATEGORIES */}
			<div className='flex mx-4 mt-3 gap-2'>
				<CategoriesLogo />
				<p className='text-gray-700 font-semibold text-sm'>Categories</p>
			</div>
			{isCategoriesLoading ? (
				<Spinner />
			) : (
				<div className='flex flex-col mx-4 my-3 w-full gap-2'>
					{categories?.map((cat, index) => (
						<SiderItem data={cat} key={index} />
					))}
				</div>
			)}
			{/* NUMERICALS */}
			<div className='flex mx-4 mt-3 gap-2'>
				<NumericalsLogo />
				<p className='text-gray-700 font-semibold text-sm'>Numericals</p>
			</div>
			{isNumericalsLoading ? (
				<Spinner />
			) : (
				<div className='flex flex-col mx-4 my-3 w-full gap-2'>
					{numericals?.map((num, index) => (
						<SiderItem data={num} key={index} />
					))}
				</div>
			)}
			{/* URLS */}
			<div className='flex mx-4 mt-3 gap-2'>
				<UrlsLogo />
				<p className='text-gray-700 font-semibold text-sm'>URLs</p>
			</div>
			{isLinksLoading ? (
				<Spinner />
			) : (
				<div className='flex flex-col mx-4 my-3 w-full gap-2'>
					{links?.map((num, index) => (
						<SiderItem data={num} key={index} />
					))}
				</div>
			)}
			{/* Dates */}
			<div className='flex mx-4 mt-3 gap-2'>
				<DatesLogo />
				<p className='text-gray-700 font-semibold text-sm'>Dates</p>
			</div>
			{isDatesLoading ? (
				<Spinner />
			) : (
				<div className='flex flex-col mx-4 my-3 w-full gap-2'>
					{dates?.map((num, index) => (
						<SiderItem data={num} key={index} />
					))}
				</div>
			)}
			{/* Booleans */}
			<div className='flex mx-4 mt-3 gap-2'>
				<BooleansLogo />
				<p className='text-gray-700 font-medium text-sm'>Booleans</p>
			</div>
			{isBooleansLoading ? (
				<Spinner />
			) : (
				<div className='flex flex-col mx-4 mt-3 w-full gap-2'>
					{booleans?.map((num, index) => (
						<SiderItem data={num} key={index} />
					))}
				</div>
			)}
			<div className='flex w-full items-center justify-center pb-6'>
				<button
					className=' bg-blue-700 h-8 flex items-center text-sm text-white px-4 rounded-md hover:bg-black gap-2 mt-20'
					onClick={() => window.open('https://www.polymersearch.com', '_blank')}>
					<img
						className='w-5'
						src='https://cdn.polymersearch.com/assets/img/polymer-logo-animated-white-64px-2.a6f7303b.gif'
						alt='pol-logo'
					/>
					Built with Polymer
				</button>
			</div>
		</aside>
	)
}

export default Sider
