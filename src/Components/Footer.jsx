import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Footer.css'

const config = window.config

function Footer(props) {
	const vars = config ? config : process.env
	const { linksUseful, linksDonations } = props
	const currentYear = () => {
		const today = new Date()
		return today.getFullYear()
	}
	const usefulLinks = linksUseful.reverse()
	const donationLinks = linksDonations.reverse()

	return (
		<div className="footer_container">
			<div className="footer-column">
				<div className="footer_links">
					<p className="links">Useful Links</p>
					{usefulLinks.map((link, index) => (
						<p key={index}>
							<a
								href={link.fields.link}
								target="_new"
								className="caption_text footer_link"
							>
								{link.fields.text}
							</a>
						</p>
					))}
				</div>
				<div className="footer_donations">
					<p className="links">Make a Donation</p>
					{donationLinks.map((link, index) => (
						<p key={index}>
							<a
								href={link.fields.link}
								target="_new"
								key={index}
								className="caption_text footer_link"
							>
								{link.fields.text}
							</a>
						</p>
					))}
					<p className="caption_text note">
						DWB-NYC is part of{' '}
						<a href="https://diamondway.org/" target="_new">
							DWB-USA
						</a>
						, a volunteer 501(c)3 non-profit organization
					</p>
				</div>
			</div>

			<div className="footer-column">
				<div className="subscribe_form">
					<p className="subscribe">Subscribe to our Newsletter</p>
					<form
						className="js-cm-form"
						id="subForm"
						action="https://www.createsend.com/t/subscribeerror?description="
						method="post"
						data-id="2BE4EF332AA2E32596E38B640E905619628477A51FE78EC2E33AB91CDFB166799B2CC791C4237FB40366AF66BBB135A5CD78D3139D08EE3B8F620A446B9F9B00"
					>
						<input
							aria-label="Email"
							className="js-cm-email-input"
							id="fieldEmail"
							name="cm-ouded-ouded"
							required=""
							type="email"
							placeholder="Your email"
						/>
						<button type="submit">Sign Up</button>
					</form>
				</div>

				<div>
					<p className="secondary_text address">
						<b>Diamond Way Buddhist Center {vars.REACT_APP_CITY}</b> <br />
						{vars.REACT_APP_ADDRESS}
						<br />
						<a href={`mailto:${vars.REACT_APP_EMAIL}`}>
							{vars.REACT_APP_EMAIL}
						</a>
					</p>
					<p className="caption_text note">
						© {currentYear()} Diamond Way Buddhist Centers USA
					</p>
				</div>
			</div>
		</div>
	)
}

Footer.propTypes = {
	linksUseful: PropTypes.array,
	linksDonations: PropTypes.array
}

export default Footer
