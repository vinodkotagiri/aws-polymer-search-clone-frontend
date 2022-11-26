import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChartData, removeChartData } from '../../redux/reducers/repo'
const ChartModal = ({ type = 'bar' }) => {
	const repoData = useSelector((state) => state.repos.repos)
	const dispatch = useDispatch()
	const xref = useRef(null)
	const yref = useRef(null)
	const [x, setX] = useState([])
	const [y, setY] = useState([])
	useEffect(() => {
		dispatch(setChartData({ type, x, y }))
	}, [x, y])
	const data = repoData?.map((repo) => ({
		_id: repo._id,
		name: repo.name,
		forks: repo.forks,
		language: repo.language,
		license: repo.license?.name,
		stars: repo.stargazers_count,
		watchers: repo.watchers,
		created: repo.created_at,
	}))

	const services = data?.map((service) => service.name)
	const forks = data?.map((service) => service.forks)
	const language = data?.map((service) => service.language)
	const license = data?.map((service) => service.license)
	const stars = data?.map((service) => service.stars)
	const watchers = data?.map((service) => service.watchers)
	const createdAt = data?.map((service) => new Date(`${service.created}`).toLocaleString().split(',')[0])
	const handleClear = () => {
		dispatch(removeChartData())
		xref.current.value = []
		yref.current.value = []
	}
	return (
		<div className='h-[70%] '>
			<div className='text-center'>Column & Bar Chart</div>
			<div className='flex  flex-col gap-3'>
				<select className='w-full px-4 py-2' onChange={(e) => setX(e.target.value.split(','))} ref={xref}>
					<option value={[]}>X-Axis</option>
					<option value={services}>Service</option>
					<option value={license}>License</option>
					<option value={language}>Language</option>
					<option value={forks}>Forks</option>
					<option value={stars}>Stars</option>
					<option value={watchers}>Watchers</option>
					<option value={createdAt}>Created At</option>
				</select>
				<select className='w-full px-4 py-2 ' onChange={(e) => setY(e.target.value.split(','))} ref={yref}>
					<option value={[]}>Y-Axis</option>
					<option value={services}>Service</option>
					<option value={license}>License</option>
					<option value={language}>Language</option>
					<option value={forks}>Forks</option>
					<option value={stars}>Stars</option>
					<option value={watchers}>Watchers</option>
					<option value={createdAt}>Created At</option>
				</select>
			</div>
			<div className='flex w-full items-center justify-center my-4'>
				<button className='bg-red-500 rounded-lg px-6 font-semibold text-white' onClick={handleClear}>
					Clear
				</button>
			</div>
		</div>
	)
}

export default ChartModal
