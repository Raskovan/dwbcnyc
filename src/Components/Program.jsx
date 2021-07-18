import React, { useState, useEffect } from 'react'
import Subtitle from './Subtitle'
import Bio from './Bio'
import { getDates, parseResponse, parseRegularResponse } from '../helper.js'
import '../styles/Program.css'

function Program(props) {
	const [nycEvents, setNycEvents] = useState([])
	const [ttImages, setTtImages] = useState({})
	const [showBio, setShowBio] = useState(false)
	const [bioIndex, setBioIndex] = useState()
	const [majorEvents, setMajorEvents] = useState([])

	// const { text } = props
	const { text, programText } = props

	const bioModal = index => {
		if (showBio) {
			window.scrollTo({
				top: originalPosition,
				behavior: 'smooth'
			})
		} else {
			window.scrollTo({
				top: position,
				behavior: 'smooth'
			})
		}
		setShowBio(!showBio)
		setBioIndex(index)
	}

	useEffect(() => {
		fetch(
			'https://firewheel.herokuapp.com/widgets/79/full_events.json?callback=jQuery18203743304502847564_1570990678398&hostname=www.diamondway.org&version=1.0.1&_=1570990678529'
		)
			.then(res => res.text())
			.then(response => {
				setNycEvents(parseResponse(response))
				setMajorEvents(parseRegularResponse(response))
			})
			.catch(error => console.error('Error fetching text:', error))
		fetch('https://res.cloudinary.com/diamondway/image/list/tt.json')
			.then(res => res.json())
			.then(response => {
				setTtImages(response)
			})
			.catch(error => console.error('Error fetching images:', error))
	}, [])

	const getImageId = index => {
		const name = nycEvents[index].title.split(' ').slice(2).join(' ')
		// const name = nycEvents[index].title
		// console.log(nycEvents[index].title)
		// console.log(ttImages.resources)
		const ttImage = ttImages.resources.filter(
			image => image.context.custom.caption === name
		)
		return ttImage[0] && ttImage[0].public_id
	}
	let daily
	let intro
	if (programText.length > 0) {
		daily = programText.filter(text => text.fields.match === 'daily')[0].fields
		intro = programText.filter(text => text.fields.match === 'intro')[0].fields
	}
	let position
	let originalPosition
	let positionSlides
	let positionProgram
	const slides = document.getElementById('slides')
	const program = document.getElementById('program')
	if (slides && program) {
		positionSlides = slides.getBoundingClientRect()
		positionProgram = program.getBoundingClientRect()
		if (window.innerHeight > window.innerWidth) {
			originalPosition =
				-positionSlides.top + positionProgram.top + positionProgram.height
			position =
				-positionSlides.top + positionProgram.top + positionProgram.height
		} else {
			originalPosition = -positionSlides.top + positionProgram.top
			position =
				-positionSlides.top + positionProgram.top + positionProgram.height / 2
		}
	}

	return (
		<>
			<div className="program_container">
				<div className="no_bio_container">
					<Subtitle text={text.fields.title} />
					{nycEvents.length >= 2 && (
						<div className="program_about_wide">
							<div>
								<p className="body_text">{text.fields.text}</p>
							</div>
							<div>
								<p className="info_style">
									All events are offered free of charge unless otherwise noted.
								</p>
							</div>
						</div>
					)}
					<div id="program" className="program">
						{nycEvents.length < 2 && (
							<div className="program_about">
								<div>
									<p
										className="body_text"
										dangerouslySetInnerHTML={{ __html: text.fields.text }}
									/>
								</div>
								<div>
									<p className="secondary_text">
										All events are offered free of charge unless otherwise
										noted.
									</p>
								</div>
							</div>
						)}

						{/* Suspend until further notice */}
						{daily && intro ? (
							<div
								className={
									nycEvents.length > 0
										? 'program_daily add_padding'
										: 'program_daily'
								}
							>
								<div>
									<p className="title_style">{daily.title}</p>
									<p className="sub_sub_title">{daily.date}</p>
									<hr className="ruler_style" />
									<p className="title_style">{intro.title}</p>
									<p className="sub_sub_title">{intro.date}</p>
								</div>
								<div className="daily_button">
									<a className="myButton" href={intro.link} target="_new">
										RSVP
									</a>
								</div>
							</div>
						) : null}

						{nycEvents.length > 0 &&
							nycEvents.map((event, index) => (
								<div
									className={
										nycEvents.length === 1
											? 'program_event single'
											: 'program_event'
									}
									key={index}
								>
									<>
										<p className="title_style">Upcoming Event</p>
										<p className="sub_sub_title">
											<span
												className="link_add"
												onClick={() => bioModal(index)}
											>
												{event.title.toUpperCase()}
												{'\n'}
											</span>
											{getDates(event)}
										</p>
										<div
											style={{
												flexGrow: '1',
												lineHeight: '2vmax',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'space-between',
												marginTop: '15px'
											}}
										>
											{event.description.program.map((day, index) => (
												<div className="day" key={index}>
													{day.date && (
														<p className="date_time_style">{day.date}</p>
													)}
													{day.time.map((entry, index) => (
														<p key={index} className="day_style">
															<span className="date_time_style">
																{day.time[index]} {'\u00A0'}
															</span>
															<span className="lecture_name_style">
																"{day.title[index]}"
															</span>
														</p>
													))}
												</div>
											))}
											<p className="secondary_text">
												Suggested donation: $10 per lecture
											</p>
										</div>
									</>
									{event.description.eventbrite && (
										<div style={{ marginTop: '25px' }}>
											<a
												className="myButton"
												href={event.description.eventbrite}
												target="_new"
											>
												RSVP
											</a>
										</div>
									)}
								</div>
							))}
					</div>
				</div>
				{nycEvents[bioIndex] && nycEvents[bioIndex].title && (
					<Bio
						bioModal={bioModal}
						index={bioIndex}
						showBio={showBio}
						imageId={getImageId(bioIndex)}
						bio={nycEvents[bioIndex].description.bio}
						title={nycEvents[bioIndex].title}
					/>
				)}
			</div>
			{majorEvents.length > 0 && (
				<div className="major_container">
					{majorEvents.map((event, index) => (
						<div
							className={
								majorEvents.length === 1
									? 'program_major single'
									: 'program_major'
							}
							key={index}
							style={{
								textAlign: majorEvents.length < 2 ? 'center' : ''
							}}
						>
							<div className="sub_sub_title">
								<span className="token">SPECIAL EVENT</span>
								<span className="major_event_text">
									{event.location_summary.toUpperCase()} |{' '}
									{getDates(event).toUpperCase()}
								</span>
							</div>
							<p className="title_style">{event.title}</p>
							<div className="daily_button">
								<a
									className={
										majorEvents.length < 2
											? 'myButton button_width'
											: 'myButton'
									}
									href={event.url}
									target="_new"
								>
									DETAILS
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Program
