import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Subtitle.css'

function Subtitle(props) {
	const { text } = props
	return (
		<div className="subtitle_container">
			<div>
				<p className="subtitle_text">{text}</p>
			</div>
			<div style={{ borderBottom: 'solid 1px #d22238', flexGrow: '1' }} />
		</div>
	)
}

Subtitle.propTypes = {
	text: PropTypes.string
}

export default Subtitle
