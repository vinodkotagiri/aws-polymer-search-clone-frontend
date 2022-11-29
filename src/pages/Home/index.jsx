/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { useGetReposDataQuery } from '../../redux/reducers/apiCore'
import { addReposData, removeSelectedData } from '../../redux/reducers/repo'
import Spinner from '../../components/Spinner'
import Card from '../../components/Card'
import CopyModal from '../../components/copyModal'
import FilterModal from '../../components/filterModal'
const HomePage = () => {
	const [showCopyModal, setShowCopyModal] = useState(false)
	const dispatch = useDispatch()
	const { data, isLoading } = useGetReposDataQuery()
	const repos = useSelector((state) => state.repos.repos)
	const filters = useSelector((state) => state.repos.filters)
	const selectedData = useSelector((state) => state.repos.selectedData)
	const [dataTorender, setDataToRender] = useState([])

	useEffect(() => {
		dispatch(addReposData(data))
	}, [data])
	useEffect(() => {
		setDataToRender(selectedData.length > 0 ? selectedData : repos)
	}, [selectedData])
	return (
		<Layout>
			<div className='w-full h-full bg-gray-200 relative'>
				{filters && (
					<div className='w-full h-screen absolute top-0 left-0 z-50 bg-[#00000090] flex items-center justify-start'>
						<FilterModal filters={filters} />
					</div>
				)}
				{showCopyModal && <CopyModal setShowCopyModal={setShowCopyModal} />}
				{/* FIXED BANNER */}
				<div className='h-[150px] w-full  bg-white sticky top-[56px] flex items-center justify-center text-xl font-medium'>
					<div>aws_browser.csv</div>
				</div>
				{/* FIXED TOPBAR WITH SELECT */}
				<div className='h-[52px] w-full bg-gray-100 sticky top-[206px] flex items-center justify-end text-md font-medium px-6 gap-3'>
					<small className='text-gray-600'>{dataTorender?.length} Results</small>
					{selectedData?.length > 0 && (
						<button className='p-2 pl-6 rounded-md pr-3' onClick={() => dispatch(removeSelectedData())}>
							Clear
						</button>
					)}
				</div>
				{/* MAIN CARDS DISPLAY AREA */}
				{isLoading ? (
					<Spinner size={48} />
				) : (
					<main className='w-full flex pt-4 px-12 gap-4 flex-wrap'>
						<div className='flex w-full items-center relative'></div>
						{dataTorender?.map((item, index) => (
							<Card data={item} key={index} setShowCopyModal={setShowCopyModal} />
						))}
					</main>
				)}
			</div>
		</Layout>
	)
}

export default HomePage
