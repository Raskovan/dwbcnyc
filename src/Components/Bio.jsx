import React, { useEffect, useState } from 'react'
import '../styles/Bio.css'

function Bio(props) {
	const { bio, title, showBio, imageId, bioModal, index } = props
	const [height, setHeight] = useState(null)

	useEffect(() => {
		const bioHeight = document.getElementById('bioBox').offsetHeight
		setHeight(bioHeight + 100)
	}, [])

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
				maxHeight: showBio ? height : '0'
			}}
		>
			{showBio ? (
				<span onClick={() => bioModal(index)} className="bio_close_button">
					&#10005;
				</span>
			) : null}
			<div id="bioBox" className={transitionText}>
				<div ib="bioText">
					{imageId !== '' && (
						<div
							className="mobile_only"
							style={{ float: 'right', marginLeft: '15px', width: '150px' }}
						>
							<img
								src={imageURL}
								width="100%"
								alt={name}
								style={{ borderRadius: '50%' }}
							/>
						</div>
					)}
					<p className="sub_sub_title">ABOUT {name.toUpperCase()}</p>
					<p className="bio_p">{bio}</p>
				</div>
				{imageId !== '' && (
					<div className="desktop_only" style={{ marginLeft: '15px' }}>
						<img
							src={imageURL}
							width="100%"
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
