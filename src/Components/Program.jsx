import React, { useState, useEffect } from 'react'
import Subtitle from './Subtitle'
import Bio from './Bio'
import { programText } from '../texts.js'
import { getDates, parseResponse } from '../helper.js'
import '../styles/Program.css'

function Program(props) {
	const [nycEvents, setNycEvents] = useState([])
	const [ttImages, setTtImages] = useState({})
	const { bioModal, showBio, bioIndex } = props

	// const [majorEvents, setMajorEvents] = useState([])

	useEffect(() => {
		fetch(
			'https://firewheel.herokuapp.com/widgets/119/full_events.json?callback=jQuery18203743304502847564_1570990678398&hostname=www.diamondway.org&version=1.0.1&_=1570990678529'
		)
			.then(res => res.text())
			.then(response => {
				setNycEvents(parseResponse(response))
				// setMajorEvents(majorEvents)
			})
			.catch(error => console.error('Error fetching:', error))
		fetch('https://res.cloudinary.com/diamondway/image/list/tt.json')
			.then(res => res.json())
			.then(response => {
				setTtImages(response)
			})
			.catch(error => console.error('Error fetching images:', error))
	}, [])

	const handleClick = () => {
		window.location.href =
			'https://www.eventbrite.com/e/introduction-to-diamond-way-buddhism-tickets-75976221925'
	}

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

	return (
		<div className='program_container'>
			<div className='no_bio_container'>
				<Subtitle text={'PROGRAM'} />
				{nycEvents.length >= 2 && (
					<div className='program_about_wide'>
						<div>
							<p className='program_about_p'>{programText}</p>
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
								<p className='program_about_p'>{programText}</p>
							</div>
							<div>
								<p className='info_style'>
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
							<hr style={{ margin: '30px 0 20px' }} />
							<p className='title_style'>
								Introduction to Diamond Way Buddhism
							</p>
							<p className='sub_sub_title'>FIRST TUESDAY @ 7.30 PM</p>
						</div>
						<div>
							<button className='myButton' onClick={handleClick}>
								Reserve a Spot
							</button>
						</div>
					</div>
					{nycEvents.length > 0 &&
						nycEvents.map((event, index) => (
							<div className='program_event' key={index}>
								<>
									<p className='title_style'>Upcoming Event</p>
									<p className='sub_sub_title'>
										<span
											className='sub_sub_title link_add'
											onClick={() => bioModal(index)}>
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
												{day.time && (
													<span className='date_time_style'>
														{day.time} {'\u00A0'}
													</span>
												)}
												{day.title && (
													<span className='lecture_name_style'>
														"{day.title}"
													</span>
												)}
											</div>
										))}
									</div>
								</>
								{/* <div style={{ transition: 'opacity 0.6s' }}>
									<p className='info_style'>Suggested donation</p>
								</div> */}
								<div>
									<button className='myButton' onClick={handleClick}>
										Reserve a Spot
									</button>
								</div>
							</div>
						))}
				</div>
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
