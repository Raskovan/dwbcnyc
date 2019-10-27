import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'
import { teachingsText } from '../texts.js'

export default function Center() {
	return (
		<>
			<Subtitle text={'TEACHINGS'} />
			<div className='section_img teachings_image'>
				<img
					src={require(`../assets/teachings.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div className='container'>
				<p className='body_text'>{teachingsText}</p>
			</div>
		</>
	)
}
