import React from 'react'

function Subtitle(props) {
	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
				margin: '3vmax 0 3vmax',
				alignItems: 'baseline',
				fontWeight: '200'
			}}>
			<div>
				<p
					style={{
						fontSize: '3.3vmax',
						color: '#d22238',
						margin: '0',
						paddingRight: '15px'
					}}>
					{props.text}
				</p>
			</div>
			<div style={{ borderBottom: 'solid 1px #d22238', flexGrow: '1' }}></div>
		</div>
	)
}

export default Subtitle
