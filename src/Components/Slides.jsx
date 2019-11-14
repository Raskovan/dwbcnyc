import React from 'react'
import '../styles/Slides.css'

function Slides(props) {
	const { images } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? window.innerWidth
			: window.innerHeight
	)
	const getLink = name => {
		let slidePublicId = images.filter(
			image => image.context.custom.caption === name
		)[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${slidePublicId}.jpg`
	}

	let imgHeight = window.innerWidth > 414 ? '80vh' : '61vh'

	return (
		<div className='fadein' width='100%' style={{ height: `${imgHeight}` }}>
			<div id='f1'>
				<img src={getLink('Lama Ole')} alt='Lama Ole' />
				<p className='slide_caption ole_caption'>{`Lama Ole Nydahl`}</p>
			</div>
			<div id='f2'>
				<img
					className='img_karmapa'
					src={getLink('17th Karmapa')}
					alt='17th Karmapa'
				/>
				<p className='slide_caption karmapa_caption'>{`H. H. 17th Karmapa`}</p>
			</div>
			<div id='f3'>
				<img className='img_buddha' src={getLink('Buddha')} alt='Buddha' />
			</div>
		</div>
	)
}

export default Slides
