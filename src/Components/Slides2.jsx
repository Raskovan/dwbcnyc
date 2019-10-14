import React from 'react'
import ole from '../assets/ole_front.jpg'
import karmapa from '../assets/karmapa_front.jpg'
import buddha from '../assets/buddha_front_2.jpg'
import '../styles/Slides2.css'

function Slides2() {
	return (
		<div className='fadein' width='100%'>
			<div id='f3'>
				<img src={ole} width='100%' alt='Lama Ole' />
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
			<div id='f2'>
				<img src={karmapa} width='100%' alt='17th Karmapa' />
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
			<div id='f1'>
				<img src={buddha} width='100%' alt='Buddha' />
			</div>
		</div>
	)
}

export default Slides2
