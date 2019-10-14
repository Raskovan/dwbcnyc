import React from 'react'
import Subtitle from './Subtitle'

function Center(props) {
	return (
		<div style={{ marginBottom: '65px' }}>
			<Subtitle text={'OUR CENTER'} />
			<div style={{ margin: '0 -10vmin 45px' }}>
				<img
					src={require(`../assets/center.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ width: '58%', padding: '0 15px 0 0' }}>
					<p
						style={{
							fontSize: '1.5vmax',
							lineHeight: '2.3vmax',
							color: '#2b2b2b',
							fontWeight: '200',
							margin: '0'
						}}>
						Diamond Way Buddhist Center New York is part of an international
						network of over 600 meditation centers in the Karma Kagyu tradition
						of Tibetan Buddhism. The centers were started due to the unique
						inspiration of Lama Ole Nydahl according to the wishes of H.H. 16th
						Karmapa. They are now under the spiritual guidance of H.H. 17th
						Gyalwa Karmapa Trinley Thaye Dorje. <br />
						<br />
						Our centers consist of people and families working full-time jobs,
						and incorporating Diamond Way teachings and meditations into their
						daily lives. Members share responsibility for guiding meditations,
						answering questions, and giving explanations about Buddhism; their
						work is unpaid, and based on idealism and friendship.
					</p>
				</div>
				<div style={{ width: '38%' }}>
					<div style={{ position: 'relative', width: '100%', height: '100%' }}>
						<iframe
							title='GMap'
							width='100%'
							height='100%'
							frameBorder='0'
							style={{ border: '0' }}
							src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHdOJgadZwokReTcfF04Wu4g&key=AIzaSyCA7Z-O2hq7zGCKW9unu-5cZRnTM7VS_s8'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Center
