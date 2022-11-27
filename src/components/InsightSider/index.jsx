import React, { useState } from 'react'
import barLogo from '../../assets/svg/barLogo.svg'
import scatterLogo from '../../assets/svg/scatterLogo.svg'
// import timeLogo from '../../assets/svg/timeSeriesLogo.svg'
// import heatLogo from '../../assets/svg/heatMapLogo.svg'
import lineLogo from '../../assets/svg/linePlotLogo.svg'
import pieLogo from '../../assets/svg/piePlotLogo.svg'
// import depLogo from '../../assets/svg/dependencyLogo.svg'
import ChartModal from '../../components/ChartModal'
import { setFlag } from '../../redux/reducers/repo'
import { useDispatch } from 'react-redux'
const InsightSider = () => {
	const [showChartMenu, setShowChartMenu] = useState(false)
	const [type, setType] = useState('bar')
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	return (
		<aside className=' w-full border-r-2 pt-6 h-screen bg-gray-100 flex flex-col pr-2 overflow-y-scroll overflow-x-hidden sticky left-0 top-0 z-[40]'>
			<div className='w-full flex items-center justify-center px-4 relative'>
				<button
					className='w-full bg-black text-white text-sm h-8 rounded-md hover:opacity-70'
					onClick={() => setShowChartMenu(!showChartMenu)}>
					+ New Block
				</button>
				{/* POP UP START */}
				{showChartMenu && (
					<div className='absolute top-10 w-[90%] flex flex-col items-center'>
						<div className=' border-r-transparent  border-l-transparent border-b-[8px] border-b-black  border-r-[8px]  border-l-[8px] h-0 w-0' />
						<div className='bg-black rounded-md w-full text-white p-3'>
							<details open={true}>
								<summary>Visualize</summary>
								<div className='flex text-[10px] mt-2 gap-1 flex-wrap'>
									<button
										className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'
										onClick={() => {
											dispatch(setFlag(false))
											setOpen(true)
											setType('bar')
											setShowChartMenu(false)
										}}>
										<img src={barLogo} className='w-6' alt='logo' /> Columns & Bar Chart
									</button>
									<button
										className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'
										onClick={() => {
											dispatch(setFlag(false))
											setOpen(true)
											setType('scatter')
											setShowChartMenu(false)
										}}>
										<img src={scatterLogo} className='w-6' alt='logo' /> Scatter Plot
									</button>
									{/* <button className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'>
										<img src={timeLogo} className='w-6' alt='logo' /> Time Series
									</button> */}
									{/* <button className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'>
										<img src={heatLogo} className='w-6' alt='logo' /> Heat Map
									</button> */}
									<button className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'>
										<img
											src={lineLogo}
											className='w-6'
											alt='logo'
											onClick={() => {
												dispatch(setFlag(false))
												setOpen(true)
												setType('line')
												setShowChartMenu(false)
											}}
										/>
										Line Plot
									</button>
									<button
										className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'
										onClick={() => {
											dispatch(setFlag(false))
											setOpen(true)
											setType('pie')
											setShowChartMenu(false)
										}}>
										<img src={pieLogo} className='w-6' alt='logo' /> Pie Plot
									</button>
									{/* <button className='rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center p-2 w-[80px] h-[80px]'>
										<img src={depLogo} className='w-6' alt='logo' /> Dependency Wheel
									</button> */}
								</div>
							</details>
						</div>
					</div>
				)}
				{/* POPUP END */}
			</div>
			<hr className='my-6' />
			{/* CHART INPUTS */}
			{open && <ChartModal type={type} />}
			{/* CHART INPUTS END */}
			{/* FOOTER */}
			<footer className='flex w-full items-center justify-center pb-6'>
				<button
					className=' bg-blue-700 h-8 flex items-center  text-sm text-white px-4 rounded-md hover:bg-black gap-2 mt-6'
					onClick={() => window.open('https://www.polymersearch.com', '_blank')}>
					<img
						className='w-5'
						src='https://cdn.polymersearch.com/assets/img/polymer-logo-animated-white-64px-2.a6f7303b.gif'
						alt='pol-logo'
					/>
					Built with Polymer
				</button>
			</footer>
		</aside>
	)
}

export default InsightSider
