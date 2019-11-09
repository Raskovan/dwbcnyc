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
	const [textArray, setTextArray] = useState([])

	useEffect(() => {
		fetch('https://res.cloudinary.com/diamondway/image/list/assets.json')
			.then(res => res.json())
			.then(response => {
				setImageArray(response.resources)
			})
			.catch(error => console.error('Error fetching images:', error))
	}, [])

	useEffect(() => {
		fetch(
			`https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`
		)
			.then(res => res.json())
			.then(response => {
				setTextArray(response.items)
				console.log(response.items)
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
			{imageArray.length > 0 && textArray.length > 0 && (
				<>
					<Slides
						images={imageArray.filter(
							img => img.context.custom.position === 'slides'
						)}
					/>
					<div className='window_pad'>
						<Buddhism
							text={
								textArray.filter(text => text.fields.name === 'buddhism')[0]
							}
							images={imageArray.filter(
								img => img.context.custom.position === 'buddhism'
							)}
						/>
						<Center
							textMP={textArray.filter(text => text.fields.name === 'mp')[0]}
							text={textArray.filter(text => text.fields.name === 'center')[0]}
							images={imageArray.filter(
								img => img.context.custom.position === 'center'
							)}
						/>
						<Program
							text={textArray.filter(text => text.fields.name === 'program')[0]}
						/>
						<Teachings
							text={
								textArray.filter(text => text.fields.name === 'teachings')[0]
							}
							images={imageArray.filter(
								img => img.context.custom.position === 'teachings'
							)}
						/>
						<Teachers
							text={textArray.filter(
								text => text.sys.contentType.sys.id === 'teacher'
							)}
							images={imageArray.filter(
								img => img.context.custom.position === 'teachers'
							)}
						/>
						<Quote
							text={textArray.filter(text => text.fields.name === 'quote')[0]}
						/>
					</div>
					<Footer
						linksDonations={textArray.filter(
							text => text.fields.id === 'donations'
						)}
						linksUseful={textArray.filter(text => text.fields.id === 'useful')}
					/>
				</>
			)}
		</div>
	)
}

export default App
