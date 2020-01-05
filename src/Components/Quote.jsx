import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Quote.css'

export default function Quote(props) {
	const { text } = props
	return <div className="quote">{text.fields.text}</div>
}

Quote.propTypes = {
	text: PropTypes.object
}
