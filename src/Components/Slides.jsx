import React from 'react'
import ole from '../assets/ole_front.jpg'
import karmapa from '../assets/17Karmapa_1.jpg'
import buddha from '../assets/buddha_front.jpg'
import '../styles/Slides.css'

function Slides2() {
	let imgHeight =
		window.innerWidth > 414
			? window.innerWidth / 1.5 - 100
			: (window.innerWidth / 1.5) * 2

	return (
		<div className='fadein' width='100%' style={{ height: `${imgHeight}px` }}>
			<div id='f1'>
				<img src={ole} alt='Lama Ole' />
				<p className='slide_caption ole_caption'>{`Lama Ole Nydahl`}</p>
			</div>
			<div id='f2'>
				<img className='img_karmapa' src={karmapa} alt='17th Karmapa' />
				<p className='slide_caption karmapa_caption'>{`H. H. 17th Karmapa`}</p>
			</div>
			<div id='f3'>
				<img className='img_buddha' src={buddha} alt='Buddha' />
			</div>
		</div>
	)
}

export default Slides2
