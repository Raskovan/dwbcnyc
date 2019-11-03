import React from 'react'
import { usefulLinks, donationLinks } from '../texts.js'
import '../styles/Footer.css'

function Footer() {
	const currentYear = () => {
		let today = new Date()
		return today.getFullYear()
	}
	return (
		<div className='footer_container'>
			<div className='footer-column'>
				<div className='footer_links'>
					<p className='links'>Useful Links</p>
					{usefulLinks.map((link, index) => (
						<p key={index}>
							<a
								href={link.link}
								target='_new'
								className='caption_text footer_link'>
								{link.text}
							</a>
						</p>
					))}
				</div>
				<div className='footer_donations'>
					<p className='links'>Make a Donation</p>
					{donationLinks.map((link, index) => (
						<p key={index}>
							<a
								href={link.link}
								target='_new'
								key={index}
								className='caption_text footer_link'>
								{link.text}
							</a>
						</p>
					))}
					<p className='caption_text note'>
						DWBC NYC is a 501(c)(3) volunteer-led, charitable entity in the USA
					</p>
				</div>
			</div>

			<div className='footer-column'>
				<div className='subscribe_form'>
					<p className='subscribe'>Subscribe to our Newsletter</p>
					<form
						className='js-cm-form'
						id='subForm'
						action='https://www.createsend.com/t/subscribeerror?description='
						method='post'
						data-id='2BE4EF332AA2E32596E38B640E905619628477A51FE78EC2E33AB91CDFB166799B2CC791C4237FB40366AF66BBB135A5CD78D3139D08EE3B8F620A446B9F9B00'>
						<input
							aria-label='Email'
							className='js-cm-email-input'
							id='fieldEmail'
							name='cm-ouded-ouded'
							required=''
							type='email'
							placeholder='Your email'
						/>
						<button type='submit'>Sign Up</button>
					</form>
				</div>

				<div>
					<p className='secondary_text address'>
						<b>Diamond Way Buddhist Center NYC</b> <br />
						114 E 28th St Suite 1, New York, NY 10016
						<br />
						<a href='mailto:newyork@diamondway.org'>newyork@diamondway.org</a>
					</p>
					<p className='caption_text note'>
						© {currentYear()} Diamond Way Buddhist Centers USA
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
