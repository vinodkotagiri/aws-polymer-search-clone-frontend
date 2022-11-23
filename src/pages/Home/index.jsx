import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { useGetReposDataQuery } from '../../redux/reducers/reposAPI'
import Loader from '../../components/Loader'
import { useSelector } from 'react-redux'
import FilterModal from '../../components/FilterModal'
const Home = () => {
	const [loading, setLoading] = useState(false)
	const { isLoading } = useGetReposDataQuery()
	const modalState = useSelector((state) => state.repos.open)
	const { selectedData } = useSelector((state) => state.repos)
	const repoData = useSelector((state) => state.repos.data)
	const [dataToRender, setDataToRender] = useState([])
	const setRenderData = () => {
		const filteredData = []
		selectedData.forEach((el) => {
			repoData.forEach((repo) => {
				if (repo._id === el) filteredData.push(repo)
			})
		})
		if (filteredData.length === 0) setDataToRender(repoData)
		else setDataToRender(filteredData)
	}
	console.table(dataToRender)
	useEffect(() => {
		setDataToRender(repoData)
	}, [repoData])
	useEffect(() => {
		setRenderData()
		if (isLoading) setLoading(true)
		else setLoading(false)
	}, [isLoading, selectedData])
	return (
		<Layout>
			<div className='w-full'>
				{/* BANNER START */}
				<div className='w-full h-[150px] flex  items-center justify-center bg-[url("https://cdn.polymersearch.com/shimmer_1.svg")] bg-cover sticky top-[56px] left-0 '>
					<div className='flex flex-col gap-3 items-center justify-center '>
						<p className='text-xl font-semibold'>Everything AWS</p>
						<p className='text-xs font-semibold text-gray-600'>Search and discover 6K+ quality AWS repositories</p>
					</div>
				</div>
				{/* BANNER END */}
				{modalState && <FilterModal />}
				{loading ? (
					<Loader />
				) : (
					<>
						<div className='w-full bg-gray-100 h-14 border-2 shadow-sm flex items-center justify-end pr-6'>
							<div className='flex gap-3 items-center'>
								<p className='text-sm font-semibold text-gray-600'>6,227 Results</p>
								<select className='p-2 font-semibold rounded-md border-2'>
									<option>Sort By</option>
								</select>
							</div>
						</div>
						<div className='w-full h-auto bg-gray-200 p-3 flex justify-start flex-wrap gap-2'>
							{dataToRender?.map((repo, index) => (
								<Card key={index} data={repo} />
							))}
						</div>
					</>
				)}
			</div>
		</Layout>
	)
}

export default Home
