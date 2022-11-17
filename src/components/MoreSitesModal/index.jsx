import React from 'react'
import polymerlogo from '../../assets/svg/polymer-logo.svg'
import FlexGem from '../../assets/svg/flixgem.svg'
import YCA from '../../assets/svg/YCA.svg'
import SheetHacks from '../../assets/svg/sh-logo.svg'
import InterveiwG from '../../assets/svg/lightbulb.svg'
import GitAwesome from '../../assets/svg/search.svg'
import { BsArrowRight } from 'react-icons/bs'
const MoreSitesModal = ({ setOpen }) => {
	return (
		<div className='w-[600px]  border-2 rounded-xl shadow-lg absolute top-12 right-48 p-3 px-6'>
			<div
				className='flex gap-3 rounded-full relative border-2 shadow-xl px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://www.polymersearch.com/', '_blank')
					setOpen(false)
				}}>
				<img src={polymerlogo} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>Build a Polymer Site</p>
					<p className='text-gray-600'>The only no-code way to build spreasheet applications</p>
					<BsArrowRight size={32} className='text-blue-500 absolute top-3 right-3' />
				</div>
			</div>
			<hr className='my-3' />
			<div
				className='flex gap-3  px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://flixgem.com/?utm_source=aws', '_blank')
					setOpen(false)
				}}>
				<img src={FlexGem} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>FlixGem</p>
					<p className='text-gray-600'>Discover hidden gems for your Netflix fix</p>
				</div>
			</div>
			<div
				className='flex gap-3  px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://ycadvice.com/?utm_source=aws', '_blank')
					setOpen(false)
				}}>
				<img src={YCA} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>YCAdvice</p>
					<p className='text-gray-600'>The best startup advice from Y Combinator</p>
				</div>
			</div>
			<div
				className='flex gap-3  px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://sheethacks.com/?utm_source=aws', '_blank')
					setOpen(false)
				}}>
				<img src={SheetHacks} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>SheetHacks</p>
					<p className='text-gray-600'>Discover the best tips and tricks for Google Sheets and Excel</p>
				</div>
			</div>
			<div
				className='flex gap-3  px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://interviewgeni.us/?utm_source=aws', '_blank')
					setOpen(false)
				}}>
				<img src={InterveiwG} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>InterviewGenius</p>
					<p className='text-gray-600'>Master your tech interview</p>
				</div>
			</div>
			<div
				className='flex gap-3  px-3 py-2 hover:bg-gray-100 cursor-pointer'
				onClick={() => {
					window.open('https://app.polymersearch.com/discover/github-awesome?utm_source=aws', '_blank')
					setOpen(false)
				}}>
				<img src={GitAwesome} alt='polymer-logo' className='w-8 h-8' />
				<div className='flex flex-col '>
					<p className='font-semibold text-md'>GitHub Awesome</p>
					<p className='text-gray-600'>Search and discover every awesome list on GitHub</p>
				</div>
			</div>
		</div>
	)
}

export default MoreSitesModal
