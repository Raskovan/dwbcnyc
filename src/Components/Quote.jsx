import React from 'react'
import '../styles/Quote.css'

export default function Quote(props) {
	const { text } = props
	return <p className="quote">{text.fields.text}</p>
}
