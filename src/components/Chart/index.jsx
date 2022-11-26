import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const Chart = () => {
	const { x, y } = useSelector((state) => state.repos.chartData)
	const labels = x
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart',
			},
		},
	}
	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: y,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	}
	return (
		<div className='w-full h-full p-4 flex items-center justify-center'>
			<Bar options={options} data={data} />
		</div>
	)
}

export default Chart
