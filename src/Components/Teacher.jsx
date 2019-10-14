import React from 'react'

function Teacher(props) {
	return (
		<div style={{ width: '48%', display: 'flex' }}>
			<div style={{ width: '35%', marginRight: '15px' }}>
				<img
					src={props.image}
					width='100%'
					alt={props.name}
					style={{ filter: 'grayscale(100%)' }}
				/>
			</div>
			<div style={{ width: '65%' }}>
				<a
					href={props.link}
					target='_new'
					style={{
						fontSize: '1.6vmax',
						color: '#d22238',
						fontWeight: '600'
					}}>
					{props.name}
				</a>
				<p
					style={{
						fontSize: '1.3vmax',
						lineHeight: '1.9vmax',
						margin: '10px 0',
						color: '#2b2b2b',
						fontWeight: '300',
						whiteSpace: 'pre-wrap'
					}}>
					{props.description}
				</p>
			</div>
		</div>
	)
}

export default Teacher
