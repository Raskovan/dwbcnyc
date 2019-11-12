import React from 'react'
import '../styles/Quote.css'

export default function Quote(props) {
	const { text } = props
	return <div className='quote'>{text.fields.text}</div>
}
