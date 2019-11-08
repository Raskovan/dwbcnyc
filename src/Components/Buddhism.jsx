import React from 'react'
import '../styles/Buddhism.css'
import { buddhismText } from '../texts.js'

export default function Buddhism(props) {
	const { images } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth / 3
			: window.innerHeight / 3
	)
	const getLink = () => {
		let buddhismPublicId = images[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${buddhismPublicId}.png`
	}
	return (
		<div className='container'>
			<div className='container_text'>
				<p className='body_text'>{buddhismText}</p>
			</div>
			<div className='buddhism_img'>
				<img src={getLink()} alt='Dorje Chang' width='100%' />
			</div>
		</div>
	)
}
