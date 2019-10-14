import React from 'react'
import flames from '../assets/flames.svg'
import '../styles/Footer.css'

function Footer() {
	const currentYear = () => {
		let today = new Date()
		return today.getFullYear()
	}
	return (
		<div
			style={{
				height: '40vh',
				background: '#353535',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: '5vmin 10vmin',
				backgroundImage: `url(${flames})`
			}}>
			<div className='footer-column'>
				<div>
					<p className='links'>Usefull Links</p>
					<p className='link'>
						<a href='https://www.karmapa.org/' target='_new'>
							Thaye Dorje, His Holiness the 17th Gyalwa Karmapa
						</a>
						<br />
						<a href='https://lama-ole-nydahl.org/' target='_new'>
							Lama Ole Nydahl
						</a>
						<br />
						<a
							href='https://lama-ole-nydahl.org/teaching-schedule/download/lama-ole-teaching-schedule.pdf'
							target='_new'>
							Lama Ole's Travel Plan (PDF)
						</a>
						<br />
						<a href='https://www.diamondway-buddhism.org/' target='_new'>
							Diamond Way Buddhism Worldwide
						</a>
						<br />
						<a href='https://buddhism-today.org' target='_new'>
							{' '}
							Buddhism Today Magazine
						</a>
					</p>
				</div>
				<div>
					<p className='links'>Make a Donation</p>
					<p className='link'>
						<a href='https://horatio.herokuapp.com/forms/30' target='_new'>
							Make a one-time donation
						</a>
						<br />
						<a href='https://horatio.herokuapp.com/forms/78' target='_new'>
							Make a payment
						</a>
						<br />
						<a href='https://horatio.herokuapp.com/forms/2' target='_new'>
							Become a member
						</a>
						<br />
						<a
							href='https://horatio.herokuapp.com/organizations/1/lookups/new'
							target='_new'>
							Change your membership
						</a>
						<br />
					</p>
					<p className='note'>
						DWBC NYC is a 501(c)(3) volunteer-led, charitable entity in the USA
					</p>
				</div>
			</div>
			<div className='footer-column'>
				<div>
					<p className='subscribe'>Subscribe to our Newsletter</p>
					<form action='/action_page.php'>
						<input type='text' id='email' placeholder='Your email' />
						<input type='submit' value='Sign Up' />
					</form>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end'
					}}>
					<div>
						<p className='address'>
							Diamond Way Buddhist Center NYC <br />
							114 E 28th St Suite 1, New York, NY 10016
							<br />
							<a href='mailto:newyork@diamondway.org'>newyork@diamondway.org</a>
						</p>
						<p className='note'>
							© {currentYear()} Diamond Way Buddhist Centers USA
						</p>
					</div>
					<div
						style={{
							width: '25%'
						}}>
						<div className='mp-logo'>
							<a
								href='http://www.diamondway.org/manhattan-project/'
								target='_new'>
								<img
									src={require(`../assets/mp_white.png`)}
									width='100%'
									alt='MP Logo'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
