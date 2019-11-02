import React, { useEffect, useState } from 'react'
import '../styles/Bio.css'

function Bio(props) {
	const { bio, title, showBio, imageId } = props
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
		const bioHeight = document.getElementById('bioBox').offsetHeight
		// const bioTextHeight = document.getElementById('bioText').clientHeight
		setHeight(bioHeight)
		const bound = document.getElementById('bioText')
			? document.getElementById('bioText').getBoundingClientRect()
			: null

		console.log(bound)
	}, [dimensions])
	const name = title
		.split(' ')
		.slice(2)
		.join(' ')
	const transition = showBio ? ['section', 'show'].join(' ') : 'section'
	const transitionText = showBio
		? ['section_text', 'show_text'].join(' ')
		: 'section_text'

	let imageURL
	if (imageId !== '') {
		imageURL = `https://res.cloudinary.com/diamondway/image/upload/t_square_crop/${imageId}.jpg`
	}

	return (
		<div
			className={transition}
			style={{
				background: '#f3f3f3',
				maxHeight: showBio
					? dimensions.width > 414
						? height
						: height + height * (8.8 / 100)
					: 0
			}}>
			<div id='bioBox' className={transitionText}>
				<div ib='bioText'>
					{imageId !== '' && (
						<div
							className='mobile_only'
							style={{ float: 'right', marginLeft: '15px', width: '150px' }}>
							<img
								src={imageURL}
								width='100%'
								alt={name}
								style={{ borderRadius: '50%' }}
							/>
						</div>
					)}
					<p className='sub_sub_title'>ABOUT {name.toUpperCase()}</p>
					<p className='bio_p'>{bio}</p>
				</div>
				{imageId !== '' && (
					<div className='desktop_only' style={{ marginLeft: '15px' }}>
						<img
							src={imageURL}
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
