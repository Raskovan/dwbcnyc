import React from 'react'
import ole from '../assets/ole_front.jpg'
import '../styles/Slides.css'

function Slides() {
	return (
		<div className='fadein'>
			<div className='div-img'>
				<img src={ole} alt='ole' />
			</div>
		</div>
	)
}

export default Slides
