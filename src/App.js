import React, { useState } from 'react'
import Header from './Components/Header.jsx'
// import Slides from './Components/Slides.jsx'
import Buddhism from './Components/Buddhism.jsx'
import Program from './Components/Program.jsx'
import Teachers from './Components/Teachers.jsx'
import Center from './Components/Center.jsx'
import Footer from './Components/Footer.jsx'
import Slides from './Components/Slides2.jsx'
import Quote from './Components/Quote.jsx'
import Teachings from './Components/Teachings.jsx'
import './styles/App.css'

function App() {
	const [showBio, setShowBio] = useState(false)
	const bioModal = () => {
		setShowBio(!showBio)
	}

	return (
		<div style={{ margin: '0' }}>
			<Header />
			<Slides />
			<div style={{ padding: '0 10vmin' }}>
				<Buddhism />
				<Center />
				<Program showBio={showBio} bioModal={bioModal} />
				<Teachings />
				<Teachers />
				<Quote />
			</div>
			<Footer />
		</div>
	)
}

export default App
