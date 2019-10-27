import React from 'react'
import dorjeChang from '../assets/dorje_chang.jpg'
import '../styles/Buddhism.css'
import { buddhismText } from '../texts.js'

export default function Buddhism() {
	return (
		<div className='container'>
			<div className='container_text'>
				<p className='body_text'>{buddhismText}</p>
			</div>
			<div className='buddhism_img'>
				<img src={dorjeChang} alt='Dorje Chang' width='100%' />
			</div>
		</div>
	)
}
