import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Center.css'
import { Parallax } from 'react-parallax'

export default function Center(props) {
	const { images, text, textMP } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth
			: window.innerWidth * 2
	)
	const imageHeight = Math.floor(imageWidth / 2.93)
	console.log(imageHeight)
	const getLink = () => {
		let centerPublicId = images[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${centerPublicId}.jpg`
	}
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
	const twoStyles = ['section_img', 'center_img'].join(' ')
	return (
		<>
			<Subtitle text={text.fields.title} />
			<Parallax
				className={twoStyles}
				bgImage={getLink()}
				bgImageAlt='NYC Center'
				strength={0}>
				<div style={{ height: `${imageHeight}px` }} />
			</Parallax>

			{/* <div className='section_img center_img'>
				<img src={getLink()} width='100%' alt='NYC Center' />
			</div> */}

			<div className='container'>
				<div className='container_text'>
					<div>
						<p className='body_text'>{text.fields.text}</p>
					</div>
					<div className='mp_container'>
						<div className='mp_img_container'>
							<img
								width='100%'
								src={require(`../assets/${
									darkMode ? 'mp_logo_white.png' : 'mp_logo_black.png'
								}`)}
								alt='Manhattan Project Logo'
							/>
						</div>
						<div>
							<p className='sub_sub_title'>{textMP.fields.title}</p>
							<p
								className='body_text'
								dangerouslySetInnerHTML={{ __html: textMP.fields.text }}></p>
						</div>
					</div>
				</div>
				<div className='container_img center_map'>
					<div className='center_map_iframe'>
						<iframe
							title='GMap'
							width='100%'
							height='100%'
							frameBorder='0'
							style={{ border: '0' }}
							src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHdOJgadZwokReTcfF04Wu4g&key=${process.env.REACT_APP_GOOGLE_MAPS}`}
							allowFullScreen></iframe>
					</div>
					<div>
						<p className='secondary_text'>
							Our Center Location:{'\n'}
							114 East 28th Street, Suite #1 New York, NY 10016 {'\n'}
							<a href='mailto:newyork@diamondway.org'>newyork@diamondway.org</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
