import React from 'react'
import Header from './Components/Header.jsx'
// import Slides from './Components/Slides.jsx'
import Buddhism from './Components/Buddhism.jsx'
import Program from './Components/Program.jsx'
import Teachers from './Components/Teachers.jsx'
import Center from './Components/Center.jsx'
import Footer from './Components/Footer.jsx'
import Slides2 from './Components/Slides2.jsx'
import Quote from './Components/Quote.jsx'

function App() {
	return (
		<div>
			<Header />
			<Slides2 />
			<div style={{ padding: '0 10vmin' }}>
				<Buddhism />
				<Program />
				<Teachers />
				<Center />
				<Quote />
			</div>
			<Footer />
		</div>
	)
}

export default App
