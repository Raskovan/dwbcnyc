import React from 'react'
import dorjeChang from '../assets/dorje_chang.jpg'

function Buddhism() {
	return (
		<div
			style={{
				maxWidth: '100%',
				margin: '25px 0 0',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
			<div style={{ width: '60%' }}>
				<p
					style={{
						fontSize: '1.5vmax',
						lineHeight: '2.4vmax',
						color: '#2b2b2b',
						fontWeight: '200'
					}}>
					The teachings of Buddhism have remained a liberating gift to mankind
					for the last 2500 years. Non-dogmatic and without any gods or
					commandments, it has enabled people to benefit both others and
					themselves. Especially today, with the many independent thinkers and
					new communication techniques, it has become possible to collect,
					organize and distribute Buddhist teachings, old as new, in attractive
					and fresh ways. <br />
					<br />
					“Diamond Way Buddhism” offers a rich access to all levels of these
					resources. Selected from the most essential instructions by qualified
					teachers to be useful to modern people, this website focuses on the
					Diamond Way teachings of the Karma Kagyu school headed by H.H. Karmapa
					Trinley Thaye Dorje.
				</p>
			</div>
			<div style={{ width: '35%' }}>
				<img src={dorjeChang} alt='Dorje Chang' width='100%' />
			</div>
		</div>
	)
}

export default Buddhism
