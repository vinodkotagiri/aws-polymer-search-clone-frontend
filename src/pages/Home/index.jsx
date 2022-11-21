import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import FilterModal from '../../components/FilterModal'
const Home = () => {
	return (
		<Layout>
			<div className='w-full relative'>
				{/* BANNER START */}
				<div className='w-full h-[150px] flex  items-center justify-center bg-[url("https://cdn.polymersearch.com/shimmer_1.svg")] bg-cover sticky top-[56px] left-0 '>
					<div className='flex flex-col gap-3 items-center justify-center '>
						<p className='text-xl font-semibold'>Everything AWS</p>
						<p className='text-xs font-semibold text-gray-600'>Search and discover 6K+ quality AWS repositories</p>
					</div>
				</div>
				{/* BANNER END */}
				<FilterModal />
				<div className='w-full bg-gray-100 h-14 border-2 shadow-sm flex items-center justify-end pr-6'>
					<div className='flex gap-3 items-center'>
						<p className='text-sm font-semibold text-gray-600'>6,227 Results</p>
						<select className='p-2 font-semibold rounded-md border-2'>
							<option>Sort By</option>
						</select>
					</div>
				</div>
				<div className='w-full h-auto bg-gray-200 p-3 flex justify-evenly flex-wrap gap-2'>
					<Card />
				</div>
			</div>
		</Layout>
	)
}

export default Home
