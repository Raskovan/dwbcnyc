import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Center.css'
import { centerText, mpText } from '../texts.js'

export default function Center() {
	return (
		<>
			<Subtitle text={'CENTER'} />
			<div className='section_img center_img'>
				<img
					src={require(`../assets/center.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div className='container'>
				<div className='container_text'>
					<div>
						<p className='body_text'>{centerText}</p>
					</div>
					<div className='mp_container'>
						<div className='mp_img_container'>
							<img
								width='100%'
								src={require('../assets/mp_logo_black.png')}
								alt='Manhattan Project Logo'
							/>
						</div>
						<div style={{ alignSelf: 'flex-end' }}>
							<p className='sub_sub_title'>THE MANHATTAN PROJECT</p>
							<p className='body_text'>{mpText}</p>
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
