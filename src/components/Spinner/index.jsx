import React from 'react'
import spinner from '../../assets/images/spinner.gif'
const Spinner = () => {
	return (
		<div className='w-full flex items-center justify-center my-6'>
			<img src={spinner} alt='spinner' style={{ width: '24px' }} />
		</div>
	)
}

export default Spinner
