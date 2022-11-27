/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	ArcElement,
	LineElement,
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, ArcElement, LineElement)
const Chart = ({ type }) => {
	const { x, y } = useSelector((state) => state.repos.chartData)
	const labels = x?.values
	const pieBgs = []
	useEffect(() => {
		const item = Math.max(x?.values?.length, y?.values?.length)
		for (let i = 0; i < item; i++) {
			pieBgs.push(
				`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(
					Math.random() * 255
				)},0.5)`
			)
		}
	}, [x, y])
	console.log(pieBgs)
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: `${x.name} vs ${y.name}`,
			},
			scales: {
				y: {
					title: `${y.name}`,
				},
			},
		},
	}
	const data = {
		labels,
		datasets: [
			{
				label: `${y.name}`,
				data: y.values,
				backgroundColor: type !== 'pie' ? 'rgba(255, 99, 132, 0.5)' : pieBgs,
			},
		],
	}
	return (
		<div className='w-full h-full p-4 flex items-center justify-center'>
			{type === 'bar' && <Bar options={options} data={data} />}
			{type === 'scatter' && <Scatter options={options} data={data} />}
			{type === 'line' && <Line options={options} data={data} />}
			{type === 'pie' && <Pie options={options} data={data} />}
		</div>
	)
}

export default Chart
