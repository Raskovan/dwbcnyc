import React from 'react'
import '../styles/Quote.css'
import { quoteText } from '../texts.js'

export default function Quote() {
	return <div className='quote'>{quoteText}</div>
}
