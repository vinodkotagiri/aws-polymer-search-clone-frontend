import React from 'react'
import spinner from '../../assets/images/spinner.gif'
const Spinner = ({ size }) => {
	return (
		<div className='w-full flex items-center justify-center my-6'>
			<img src={spinner} alt='spinner' style={size ? { width: `${size}px` } : { width: '24px' }} />
		</div>
	)
}

export default Spinner
