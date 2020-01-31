import React from 'react'
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

function App(props) {
	// const { textArray, imageArray } = props
	return (
		<div style={{ margin: '0' }}>
			<p>HELLO</p>
			{/* <Header /> */}
			{/* {imageArray && imageArray.length > 0 && textArray.length > 0 && ( */}
			<div>
				{/* <Slides
						images={imageArray.filter(
							img => img.context.custom.position === 'slides'
						)}
					/> */}
				<div className="window_pad">
					{/* <Buddhism
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
						/> */}
					{/* <Program
							text={textArray.filter(text => text.fields.name === 'program')[0]}
							programText={textArray.filter(
								text => text.fields.id === 'schedule'
							)}
						/> */}
					{/* <Teachings
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
						/> */}
				</div>
				{/* <Footer
						linksDonations={textArray.filter(
							text => text.fields.id === 'donations'
						)}
						linksUseful={textArray.filter(text => text.fields.id === 'useful')}
					/> */}
			</div>
			{/* )} */}
		</div>
	)
}

export default App
