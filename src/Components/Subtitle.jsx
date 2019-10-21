import React from 'react'
import '../styles/Subtitle.css'

function Subtitle(props) {
	return (
		<div className='subtitle_container'>
			<div>
				<p className='subtitle_text'>{props.text}</p>
			</div>
			<div style={{ borderBottom: 'solid 1px #d22238', flexGrow: '1' }} />
		</div>
	)
}

export default Subtitle
