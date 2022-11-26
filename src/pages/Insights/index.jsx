import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { ReactComponent as AddInsightsLogo } from '../../assets/svg/addInsights.svg'
import { useSelector } from 'react-redux'
import Chart from '../../components/Chart'

const InsightsPage = () => {
	const chartData = useSelector((state) => state.repos.chartData)
	const [flag, setFlag] = useState(false)
	useEffect(() => {
		setFlag(chartData.x.length > 0 && chartData.y.length > 0)
	}, [chartData])
	return (
		<Layout src='insights'>
			<div className='bg-gray-100 w-full h-full flex items-center justify-center'>
				{!flag ? (
					<div className='flex flex-col items-center justify-center w-[320px] gap-3'>
						<div className='rounded-full bg-blue-200 px-4 py-4 flex items-center justify-center w-fit'>
							<AddInsightsLogo fill='#1F69F8' />
						</div>
						<div className='text-xl font-semibold'>Add Insights</div>
						<div className='text-center'>
							<small className='font-medium text-sm text-gray-700'>
								Start adding insights such as charts, visualizations, and trends.
							</small>
						</div>
					</div>
				) : (
					<div className='w-full h-full bg-white'>
						<Chart />
					</div>
				)}
			</div>
		</Layout>
	)
}

export default InsightsPage
