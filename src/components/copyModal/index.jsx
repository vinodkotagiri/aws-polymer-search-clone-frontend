import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const CopyModal = ({ setShowCopyModal }) => {
	return (
		<div className='w-[360px] h-[140px] bg-white rounded-lg overflow-hidden shadow-lg absolute top-10 right-10 z-50 '>
			<div className='absolute top-2 right-5 cursor-pointer' onClick={() => setShowCopyModal(false)}>
				X
			</div>
			<div className='w-full bg-green-200 h-12 flex items-center px-4 text-sm font-semibold text-gray-800 mb-3 gap-2'>
				<AiOutlineCheck size={18} fill='green' />
				Link Copied
			</div>
			<small className='mx-3 '>Link Copied!</small>
			<div className='flex flex-1 items-center justify-center mt-4'>
				<button className='border-2 text-xs px-3 rounded-lg py-[2px]' onClick={() => setShowCopyModal(false)}>
					update settings
				</button>
			</div>
		</div>
	)
}

export default CopyModal
