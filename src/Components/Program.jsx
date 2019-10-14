import React, { useState, useEffect } from 'react'
import Subtitle from './Subtitle'
import '../styles/Program.css'

function Program() {
	const [nycEvents, setNycEvents] = useState([])
	const [majorEvents, setMajorEvents] = useState([])

	useEffect(() => {
		fetch(
			'https://firewheel.herokuapp.com/widgets/79/full_events.json?callback=jQuery18203743304502847564_1570990678398&hostname=www.diamondway.org&version=1.0.1&_=1570990678529',
			{ mode: 'cors' }
		)
			.then(res => res.text())
			.then(response => {
				let firstStr = response.split(
					'/**/jQuery18203743304502847564_1570990678398'
				)[1]
				let result = JSON.parse(firstStr.substr(1).slice(0, -2))
				let nycEvents = result.filter(
					event => event.location_summary === 'New York, NY'
				)
				let majorEvents = result.filter(event => event.major === true)
				nycEvents[0].description = JSON.parse(nycEvents[0].description)
				setNycEvents(nycEvents)
				setMajorEvents(majorEvents)
			})
			.catch(error => console.error('Error:', error))
	}, [])

	const handleClick = () => {
		window.location.href =
			'https://www.eventbrite.com/o/diamond-way-buddhist-center-new-york-27548185823'
	}

	const getDates = () => {
		if (nycEvents.length > 0) {
			let startDate = new Date(nycEvents[0].start_date)
			let endDate = new Date(nycEvents[0].end_date)
			let startMonth = startDate.getMonth()
			let startDay = startDate.getDate()
			let endMonth = endDate.getMonth()
			let endDay = endDate.getDate()
			let fullDate = startMonth + '/' + startDay + '-' + endMonth + '/' + endDay
			return fullDate
		} else return
	}

	return (
		<div
			style={{
				fontWeight: '200',
				marginBottom: '55px'
			}}>
			<Subtitle text={'OUR PROGRAM'} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}>
				<div
					style={{
						width: '30%',
						border: 'solid 1px #797979',
						padding: '15px 15px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'inherit'
					}}>
					<div>
						<p className='title_style'>Daily Meditation</p>
						<p className='subtitle_style'>MONDAY-FRIDAY @ 8PM</p>
						<hr style={{ margin: '30px 0 20px' }} />
						<p className='title_style'>Introduction to Diamond Way Buddhism</p>
						<p className='subtitle_style'>FIRST TUESDAY @ 7.30 PM</p>
						<p className='info_style'>
							All events are offered free of charge unless otherwise noted{' '}
						</p>
					</div>
					<div>
						<button className='myButton' onClick={handleClick}>
							Reserve a Spot
						</button>
					</div>
				</div>
				<div
					style={{
						width: '30%',
						border: 'solid 1px #797979',
						padding: '15px 15px'
					}}>
					{nycEvents.length > 0 && (
						<>
							<p className='title_style'>Special Event</p>
							<p className='subtitle_style'>
								{nycEvents.length > 0 && nycEvents[0].title.toUpperCase()} ON{' '}
								{getDates()}
							</p>
							{nycEvents.length > 0 &&
								nycEvents[0].description.program.map((day, index) => (
									<div key={index}>
										<p className='date_time_style'>{day.date}</p>
										<span className='date_time_style'>
											{day.time} {'\u00A0'}
										</span>
										<span className='lecture_name_style'>"{day.title}"</span>
									</div>
								))}
						</>
					)}
					<p className='info_style'>Suggested donation</p>
				</div>
			</div>
		</div>
	)
}

export default Program
