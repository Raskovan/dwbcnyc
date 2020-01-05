import React, { useState } from 'react'
import '../styles/Buddhism.css'

export default function Buddhism(props) {
	// const [myState, setState] = useState({})

	const { images, text } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth / 3
			: window.innerHeight / 3
	)
	const getLink = () => {
		const buddhismPublicId = images[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${buddhismPublicId}.png`
	}

	const onChange = e => {
		console.log(e)
		// setState({
		// 	...myState,
		// 	[e.target.name]: e.target.value
		// })
	}
	const onSubmit = e => {
		console.log(e)
		e.preventDefault()
	}

	return (
		<div className="container buddhism">
			<div className="container_text buddhism_text">
				<p className="body_text">{text.fields.text}</p>
			</div>
			{/* <form className="body_text" onSubmit={e => onSubmit(e)}>
				<textarea
					className="body_text"
					defaultValue={text.fields.text}
					onChange={e => onChange(e)}
				></textarea>
				<input type="submit" value="Save" />
			</form> */}
			<div className="buddhism_img">
				<img
					src={getLink()}
					alt={images[0].context.custom.caption}
					width="100%"
				/>
			</div>
		</div>
	)
}
