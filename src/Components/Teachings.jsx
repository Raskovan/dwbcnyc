import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'
import { teachingsText } from '../texts.js'

function Center() {
	return (
		<div>
			<Subtitle text={'TEACHINGS'} />
			<div className='teachings_image'>
				<img
					src={require(`../assets/teachings.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div className='teachings_about'>
				<p className='teachings_text_p'>{teachingsText}</p>
			</div>
		</div>
	)
}

export default Center
