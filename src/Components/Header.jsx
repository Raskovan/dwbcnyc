import React from 'react'
import logo from '../assets/01-logo@2x.png'
import '../styles/Header.css'

function Header() {
	return (
		<div className='header_container'>
			<header className='content_container'>
				<div className='center_name'>Diamond Way Buddhist Center NYC</div>
				<div
					style={{
						marginLeft: 'auto',
						background: `url(${logo}) no-repeat left top`,
						backgroundSize: '235px 47px',
						width: '235px',
						position: 'relative',
						top: '23px'
					}}
				/>
			</header>
			<div className='center_name_mobile'>Diamond Way Buddhist Center NYC</div>
		</div>
	)
}

export default Header
