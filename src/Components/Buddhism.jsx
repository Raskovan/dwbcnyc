import React from 'react'
import '../styles/Buddhism.css'

export default function Buddhism(props) {
	const { images, text } = props
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
				<p className='body_text'>{text.fields.text}</p>
			</div>
			<div className='buddhism_img'>
				<img
					src={getLink()}
					alt={images[0].context.custom.caption}
					width='100%'
				/>
			</div>
		</div>
	)
}
