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

	const { text } = props

	const bioModal = index => {
		setShowBio(!showBio)
		setBioIndex(index)
	}

	const [majorEvents, setMajorEvents] = useState([])

	useEffect(() => {
		fetch(
			'https://firewheel.herokuapp.com/widgets/79/full_events.json?callback=jQuery18203743304502847564_1570990678398&hostname=www.diamondway.org&version=1.0.1&_=1570990678529'
		)
			.then(res => res.text())
			.then(response => {
				setNycEvents(parseResponse(response))
				setMajorEvents(parseRegularResponse(response))
			})
			.catch(error => console.error('Error fetching:', error))
		fetch('https://res.cloudinary.com/diamondway/image/list/tt.json')
			.then(res => res.json())
			.then(response => {
				setTtImages(response)
			})
			.catch(error => console.error('Error fetching images:', error))
	}, [])

	const getImageId = index => {
		let name = nycEvents[index].title
			.split(' ')
			.slice(2)
			.join(' ')
		let ttImage = ttImages.resources.filter(
			image => image.context.custom.caption === name
		)
		return ttImage[0].public_id
	}

	const getLink = text => {
		let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi
		let match = text.match(regex)
		console.log(match)
		return match[0]
	}

	return (
		<div className='program_container'>
			<div className='no_bio_container'>
				<Subtitle text={text.fields.title} />
				{nycEvents.length >= 2 && (
					<div className='program_about_wide'>
						<div>
							<p className='body_text'>{text.fields.text}</p>
						</div>
						<div>
							<p className='info_style'>
								All events are offered free of charge unless otherwise noted.
							</p>
						</div>
					</div>
				)}
				<div className='program'>
					{nycEvents.length < 2 && (
						<div className='program_about'>
							<div>
								<p className='body_text'>{text.fields.text}</p>
							</div>
							<div>
								<p className='secondary_text'>
									All events are offered free of charge unless otherwise noted.
								</p>
							</div>
						</div>
					)}
					<div
						className={
							nycEvents.length > 0
								? 'program_daily add_padding'
								: 'program_daily'
						}>
						<div>
							<p className='title_style'>Daily Meditation</p>
							<p className='sub_sub_title'>MONDAY-FRIDAY @ 8PM</p>
							<hr className='ruler_style' />
							<p className='title_style'>
								Introduction to Diamond Way Buddhism
							</p>
							<p className='sub_sub_title'>
								FIRST TUESDAY OF THE MONTH @ 7.30 PM
							</p>
						</div>
						<div className='daily_button'>
							<a
								className='myButton'
								href='https://www.eventbrite.com/e/79293602299'
								target='_new'>
								RSVP
							</a>
						</div>
					</div>
					{nycEvents.length > 0 &&
						nycEvents.map((event, index) => (
							<div className='program_event' key={index}>
								<>
									<p className='title_style'>Upcoming Event</p>
									<p className='sub_sub_title'>
										<span className='link_add' onClick={() => bioModal(index)}>
											{event.title.toUpperCase()}
											{'\n'}
										</span>
										{getDates(event)}
									</p>
									<div style={{ flexGrow: '1', lineHeight: '2vmax' }}>
										{event.description.program.map((day, index) => (
											<div className='day' key={index}>
												{day.date && (
													<p className='date_time_style'>{day.date}</p>
												)}
												{day.time.map((entry, index) => (
													<p key={index}>
														<span className='date_time_style'>
															{day.time[index]} {'\u00A0'}
														</span>
														<span className='lecture_name_style'>
															"{day.title[index]}"
														</span>
													</p>
												))}
											</div>
										))}
									</div>
								</>
								<div>
									<a
										className='myButton'
										href={event.description.eventbrite}
										target='_new'>
										RSVP
									</a>
								</div>
							</div>
						))}
				</div>
				{majorEvents.length > 0 && (
					<div className='major_container'>
						{majorEvents.map((event, index) => (
							<div
								className='program_major'
								key={index}
								style={{
									textAlign: majorEvents.length < 2 ? 'center' : ''
								}}>
								<p className='sub_sub_title'>
									{event.location_summary.toUpperCase()} |{' '}
									{getDates(event).toUpperCase()}
								</p>
								<p className='title_style'>{event.title}</p>
								<div className='daily_button'>
									<a
										className='myButton'
										style={{
											width: majorEvents.length < 2 ? '50%' : ''
										}}
										href={getLink(event.description)}
										target='_new'>
										DETAILS
									</a>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			{nycEvents[bioIndex] && nycEvents[bioIndex].title && (
				<Bio
					showBio={showBio}
					imageId={getImageId(bioIndex)}
					bio={nycEvents[bioIndex].description.bio}
					title={nycEvents[bioIndex].title}
				/>
			)}
		</div>
	)
}

export default Program
