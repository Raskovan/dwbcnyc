import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'
import { Parallax } from 'react-parallax'

export default function Center(props) {
	const { images, text } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth
			: window.innerHeight
	)
	const imageHeight = Math.floor(imageWidth / 2.93)

	const getLink = () => {
		let teachingsPublicId = images[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teachingsPublicId}.jpg`
	}
	const twoStyles = ['section_img', 'teachings_image'].join(' ')

	return (
		<>
			<Subtitle text={text.fields.title} />
			<Parallax
				className={twoStyles}
				bgImage={getLink()}
				bgImageAlt='NYC Center'
				strength={200}>
				<div style={{ height: `${imageHeight}px` }} />
			</Parallax>
			{/* <div className='section_img teachings_image'>
				<img src={getLink()} width='100%' alt='NYC Center' />
			</div> */}
			<div className='container'>
				<p className='body_text'>{text.fields.text}</p>
			</div>
		</>
	)
}
