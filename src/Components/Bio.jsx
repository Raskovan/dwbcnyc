import React, { useEffect, useState } from 'react'
import '../styles/Bio.css'

function Bio(props) {
	const { bio, title, showBio, portrait } = props
	const [height, setHeight] = useState(null)
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	})
	useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth
			})
		}
		window.addEventListener('resize', handleResize)
		const bioHeight = document.getElementById('bioBox').clientHeight
		setHeight(bioHeight)
	}, [dimensions])
	const name = title
		.split(' ')
		.slice(2)
		.join(' ')
	const transition = showBio ? ['section', 'show'].join(' ') : 'section'
	const transitionText = showBio
		? ['section_text', 'show_text'].join(' ')
		: 'section_text'

	let image
	if (portrait !== '') {
		image = require(`../assets/${portrait}`)
	}

	return (
		<div
			className={transition}
			style={{
				background: '#f3f3f3',
				maxHeight: showBio ? height : null
			}}>
			<div id='bioBox' className={transitionText}>
				<div>
					{portrait !== '' && (
						<div
							className='mobile_only'
							style={{ float: 'right', marginLeft: '15px', width: '150px' }}>
							<img
								src={image}
								width='100%'
								alt={name}
								style={{ borderRadius: '50%' }}
							/>
						</div>
					)}
					<p className='sub_sub_title'>ABOUT {name.toUpperCase()}</p>
					<p className='bio_p'>{bio}</p>
				</div>
				{portrait !== '' && (
					<div
						className='desktop_only'
						style={{ width: '75%', marginLeft: '15px' }}>
						<img
							src={image}
							width='100%'
							alt={name}
							style={{ borderRadius: '50%' }}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Bio
