import React, { useRef } from 'react'
import useClickOutside from '../../helpers/useClickOutside'
const RepoDetailsModal = ({ repo, setOpenDetails }) => {
	const ref = useRef(null)
	useClickOutside(ref, () => setOpenDetails(false))
	return (
		<div
			ref={ref}
			className='absolute top-10 left-10 bg-white border-[2px] rounded-lg shadow-lg w-[90%] flex flex-col gap-6 p-4 py-6'>
			<div className='text-xl font-semibold'>
				{repo.name}
				<hr className='my-4' />
			</div>
			<div className='flex flex-col gap-3 text-sm'>
				<div className='flex items-center justify-between px-10'>
					<div className='font-semibold'>Full Name :</div>
					<div>{repo.full_name}</div>
				</div>
				<div className='flex items-center justify-between px-10'>
					<div className=' font-semibold'>Url :</div>
					<a className='hover:text-green-800' href={repo.url} target='_blank' rel='noreferrer'>
						{repo.url}
					</a>
				</div>
				<div className='flex items-center justify-between px-10'>
					<div className='font-semibold'>Teams :</div>
					<a className='hover:text-green-800' href={repo.teams_url} target='_blank' rel='noreferrer'>
						{repo.teams_url}
					</a>
				</div>
				<div className='flex items-center justify-between px-10'>
					<div className='font-semibold'>Contributors :</div>
					<a className='hover:text-green-800' href={repo.contributors_url} target='_blank' rel='noreferrer'>
						{repo.contributors_url}
					</a>
				</div>
				<div className='flex items-center justify-between px-10'>
					<div className='font-semibold'>Home Page :</div>
					<a className='hover:text-green-800' href={repo.homepage} target='_blank' rel='noreferrer'>
						{repo.homepage}
					</a>
				</div>
				<div className='flex items-center justify-between px-10'>
					<div className='font-semibold'>Languages :</div>
					<a className='hover:text-green-800' href={repo.languages_url} target='_blank' rel='noreferrer'>
						{repo.languages_url}
					</a>
				</div>
			</div>
		</div>
	)
}

export default RepoDetailsModal
