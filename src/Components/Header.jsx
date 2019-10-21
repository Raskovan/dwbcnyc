import React from 'react'
import logo from '../assets/01-logo@2x.png'

function Header() {
	return (
		<div
			style={{
				position: 'fixed',
				background: 'white',
				width: '100%',
				paddingBottom: '20px',
				zIndex: '2'
			}}>
			<header
				style={{
					height: '57px',
					borderBottom: 'solid 1px #d22238',
					padding: '0 10vmin',
					position: 'relative',
					display: 'flex',
					justifyContent: 'space-between'
				}}>
				<div
					style={{
						color: '#4c4b4b',
						fontSize: '2.5vmin',
						fontWeight: '300',
						alignSelf: 'flex-end'
					}}>
					Diamond Way Buddhist Center NYC
				</div>
				<div
					style={{
						background: `url(${logo}) no-repeat left top`,
						backgroundSize: '235px 47px',
						width: '235px',
						height: '47px',
						position: 'relative',
						top: '23px',
						float: 'right'
					}}
				/>
			</header>
		</div>
	)
}

export default Header
