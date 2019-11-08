import React, { useState, useEffect } from 'react'
import Header from './Components/Header.jsx'
import Buddhism from './Components/Buddhism.jsx'
import Program from './Components/Program.jsx'
import Teachers from './Components/Teachers.jsx'
import Center from './Components/Center.jsx'
import Footer from './Components/Footer.jsx'
import Slides from './Components/Slides.jsx'
import Quote from './Components/Quote.jsx'
import Teachings from './Components/Teachings.jsx'
import './styles/App.css'

function App() {
	const [width, setWidth] = useState(window.innerWidth)
	const [mode, setMode] = useState()
	const [imageArray, setImageArray] = useState([])

	useEffect(() => {
		fetch('https://res.cloudinary.com/diamondway/image/list/assets.json')
			.then(res => res.json())
			.then(response => {
				setImageArray(response.resources)
			})
			.catch(error => console.error('Error fetching images:', error))
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		function handleResize() {
			setWidth(window.innerWidth)
		}
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	useEffect(() => {
		const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
		function setThemeMode(e) {
			if (e.matches) {
				setMode('Dark')
			} else {
				setMode('Light')
			}
		}
		darkMode.addListener(setThemeMode)
	}, [mode])

	return (
		<div style={{ margin: '0' }}>
			<Header />
			{imageArray.length > 0 && (
				<>
					<Slides
						images={imageArray.filter(
							img => img.context.custom.position === 'slides'
						)}
					/>
					<div className='window_pad'>
						<Buddhism
							images={imageArray.filter(
								img => img.context.custom.position === 'buddhism'
							)}
						/>
						<Center
							images={imageArray.filter(
								img => img.context.custom.position === 'center'
							)}
						/>
						<Program />
						<Teachings
							images={imageArray.filter(
								img => img.context.custom.position === 'teachings'
							)}
						/>
						<Teachers
							images={imageArray.filter(
								img => img.context.custom.position === 'teachers'
							)}
						/>
						<Quote />
					</div>
					<Footer />
				</>
			)}
		</div>
	)
}

export default App
