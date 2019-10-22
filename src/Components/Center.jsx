import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Center.css'

function Center() {
	return (
		<div style={{ marginBottom: '65px' }}>
			<Subtitle text={'CENTER'} />
			<div className='center_image'>
				<img
					src={require(`../assets/center.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}>
				<div className='center_about'>
					<div className='center_text'>
						<p className='center_text_p'>
							Diamond Way Buddhist Center New York is part of an international
							network of over 600 meditation centers in the Karma Kagyu
							tradition of Tibetan Buddhism. The centers were started due to the
							unique inspiration of Lama Ole Nydahl according to the wishes of
							H.H. 16th Karmapa. They are now under the spiritual guidance of
							H.H. 17th Gyalwa Karmapa Trinley Thaye Dorje. <br />
							<br />
							Our centers consist of people and families working full-time jobs,
							and incorporating Diamond Way teachings and meditations into their
							daily lives. Members share responsibility for guiding meditations,
							answering questions, and giving explanations about Buddhism; their
							work is unpaid, and based on idealism and friendship.
						</p>
					</div>
					<div
						className='center_text'
						style={{
							marginTop: '35px',
							display: 'flex',
							alignItems: 'center'
						}}>
						<div style={{ width: '55%', marginRight: '25px' }}>
							<img
								width='100%'
								src={require('../assets/mp_logo_black.png')}
								alt='Manhattan Project Logo'
							/>
						</div>
						<div>
							<p
								style={{
									fontSize: '1.5vmax',
									margin: '0 0 5px 0',
									color: '#d22238',
									fontWeight: '200'
								}}>
								THE MANHATTAN PROJECT
							</p>
							<p className='center_text_p'>
								We are planning to buy property to make a permanent base for our
								center. Please visit the page of the Manhattan Project for more
								details.
							</p>
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
