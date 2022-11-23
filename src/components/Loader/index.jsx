import React from 'react'
import gif from '../../assets/images/loader.gif'
const Loader = ({ size }) => {
	return (
		<div className='w-full flex items-center justify-center h-full'>
			<img src={gif} alt='loader' style={size ? { width: '8rem' } : { width: '24rem' }} />
		</div>
	)
}

export default Loader
