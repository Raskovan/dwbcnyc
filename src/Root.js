import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Admin from './Admin'

function Root() {
	const [width, setWidth] = useState(window.innerWidth)
	const [mode, setMode] = useState()
	const [imageArray, setImageArray] = useState([])
	const [textArray, setTextArray] = useState([])

	useEffect(() => {
		fetch('https://res.cloudinary.com/diamondway/image/list/assets.json')
			.then(res => res.json())
			.then(response => {
				if (response.resources && response.resources.length)
					setImageArray(response.resources)
				else setImageArray([])
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
			})
			.catch(error => console.error('Error fetching texts:', error))
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
		<div>
			{imageArray.length > 0 && textArray.length > 0 && (
				<Router>
					<Route
						path="/"
						exact
						render={() => <App imageArray={imageArray} textArray={textArray} />}
					/>
					<Route
						path="/admin"
						exact
						render={props => (
							<Admin
								nodes={App}
								textArray={textArray}
								imageArray={imageArray}
								{...props}
							/>
						)}
					/>
				</Router>
			)}
		</div>
	)
}

export default Root
