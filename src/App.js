import React, { useState } from 'react'
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
	const [showBio, setShowBio] = useState(false)
	const [bioIndex, setBioIndex] = useState()
	const bioModal = index => {
		setShowBio(!showBio)
		setBioIndex(index)
	}

	return (
		<div style={{ margin: '0' }}>
			<Header />
			<Slides />
			<div className='window_pad'>
				<Buddhism />
				<Center />
				<Program showBio={showBio} bioModal={bioModal} bioIndex={bioIndex} />
				<Teachings />
				<Teachers />
				<Quote />
			</div>
			<Footer />
		</div>
	)
}

export default App
