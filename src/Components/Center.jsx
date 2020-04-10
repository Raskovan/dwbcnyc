import React from 'react'
import PropTypes from 'prop-types'
import Subtitle from './Subtitle'
import '../styles/Center.css'

const config = window.config

export default function Center(props) {
	const vars = config ? config : process.env
	const { images, text, textMP } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth
			: window.innerWidth * 2
	)
	const imageHeight = Math.floor(imageWidth / 2.93)

	const getLink = () => {
		const centerPublicId = images[0].public_id
		return `${vars.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${centerPublicId}.jpg`
	}
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
	return (
		<>
			<Subtitle text={text.fields.title} />
			<div
				className="section_img center_img"
				style={{ height: `${imageHeight}px` }}
			>
				<img src={getLink()} width="100%" alt="NYC Center" />
			</div>

			<div className="container">
				<div className="container_text">
					<div>
						<p
							className="body_text"
							dangerouslySetInnerHTML={{ __html: text.fields.text }}
						/>
					</div>
				</div>
				<div className="container_img center_map">
					<div className="center_map_iframe">
						<iframe
							title="GMap"
							width="100%"
							height="100%"
							frameBorder="0"
							style={{ border: '0' }}
							src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHdOJgadZwokReTcfF04Wu4g&key=${vars.REACT_APP_GOOGLE_MAPS}`}
							allowFullScreen
						></iframe>
					</div>
					<div>
						<p className="secondary_text">
							Our Center Location:{'\n'}
							{vars.REACT_APP_ADDRESS}
							{'\n'}
							<a href={`mailto:${vars.REACT_APP_EMAIL}`}>
								{vars.REACT_APP_EMAIL}
							</a>
						</p>
					</div>
					<div className="mp_container">
						<div>
							<p className="sub_sub_title no_margin">{textMP.fields.title}</p>
							<p
								className="secondary_text no_margin"
								dangerouslySetInnerHTML={{ __html: textMP.fields.text }}
							></p>
						</div>
						<div className="mp_img_container">
							<img
								width="100%"
								src={require(`../assets/${
									darkMode ? 'mp_logo_white.png' : 'mp_logo_black.png'
								}`)}
								alt="Manhattan Project Logo"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

Center.propTypes = {
	images: PropTypes.array,
	text: PropTypes.object,
	textMP: PropTypes.object
}
