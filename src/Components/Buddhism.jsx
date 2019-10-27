import React from 'react'
import dorjeChang from '../assets/dorje_chang.jpg'
import '../styles/Buddhism.css'
import { buddhismText } from '../texts.js'

function Buddhism() {
	return (
		<div className='buddhism_container'>
			<div className='buddhism_text'>
				<p className='buddhism_text_p'>{buddhismText}</p>
			</div>
			<div className='buddhism_img'>
				<img src={dorjeChang} alt='Dorje Chang' width='100%' />
			</div>
		</div>
	)
}

export default Buddhism
