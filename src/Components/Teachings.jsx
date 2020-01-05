import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'

export default function Center(props) {
	const { images, text } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth
			: window.innerWidth * 2
	)
	const imageHeight = Math.floor(imageWidth / 2.93)

	const getLink = () => {
		const teachingsPublicId = images[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teachingsPublicId}.jpg`
	}

	return (
		<div>
			<Subtitle text={text.fields.title} />
			<div
				className="section_img teachings_image"
				style={{ height: `${imageHeight}px` }}
			>
				<img src={getLink()} width="100%" alt="NYC Center" />
			</div>
			<div className="container">
				<p className="body_text">{text.fields.text}</p>
			</div>
		</div>
	)
}
