import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Center.css'
import { centerText, mpText } from '../texts.js'

function Center() {
	return (
		<div>
			<Subtitle text={'CENTER'} />
			<div className='center_image'>
				<img
					src={require(`../assets/center.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div className='center_container'>
				<div className='center_about'>
					<div className='center_text'>
						<p className='center_text_p'>{centerText}</p>
					</div>
					<div className='center_text mp_container'>
						<div className='mp_img_container'>
							<img
								width='100%'
								src={require('../assets/mp_logo_black.png')}
								alt='Manhattan Project Logo'
							/>
						</div>
						<div>
							<p className='sub_sub_title'>THE MANHATTAN PROJECT</p>
							<p className='center_text_p'>{mpText}</p>
						</div>
					</div>
				</div>
				<div className='center_map'>
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
						<p className='center_address'>
							Our Center Location:
							<br /> 114 East 28th Street, Suite #1 New York, NY 10016 <br />
							Email: newyork@diamondway.org
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Center
