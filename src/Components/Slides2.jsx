import React from 'react'
import ole from '../assets/ole_front.jpg'
import karmapa from '../assets/karmapa_front.jpg'
import buddha from '../assets/buddha_front_2.jpg'
import '../styles/Slides2.css'

function Slides2() {
	let imgHeight =
		window.innerWidth > 414
			? window.innerWidth / 1.5 - 100
			: (window.innerWidth / 1.5) * 2

	return (
		<div className='fadein' width='100%' style={{ height: `${imgHeight}px` }}>
			<div id='f1'>
				<img src={karmapa} alt='17th Karmapa' />
				<p
					style={{
						whiteSpace: 'pre-wrap',
						fontWeight: '100',
						fontSize: '2vmax',
						color: 'white',
						top: '52vmax',
						right: '5vmin',
						position: 'absolute',
						margin: '0'
					}}>
					{`H. H. 17th Karmapa`}
				</p>
			</div>
			<div id='f2'>
				<img src={buddha} alt='Buddha' />
			</div>
			<div id='f3'>
				<img src={ole} alt='Lama Ole' />
				<p
					style={{
						whiteSpace: 'pre-wrap',
						fontWeight: '100',
						fontSize: '2vmax',
						color: 'black',
						top: '52vmax',
						right: '5vmin',
						position: 'absolute',
						margin: '0'
					}}>
					{`Lama Ole Nydahl`}
				</p>
			</div>
		</div>
	)
}

export default Slides2
