import React, { useState, useEffect } from 'react'
import Subtitle from './Subtitle'
import Bio from './Bio'
import '../styles/Program.css'

function Program(props) {
	const [nycEvents, setNycEvents] = useState({})
	// const [majorEvents, setMajorEvents] = useState([])
	const { bioModal, showBio } = props
	useEffect(() => {
		fetch(
			'https://firewheel.herokuapp.com/widgets/119/full_events.json?callback=jQuery18203743304502847564_1570990678398&hostname=www.diamondway.org&version=1.0.1&_=1570990678529'
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
				// let majorEvents = result.filter(event => event.major === true)

				//Parsing HTML FROM RESPONSE
				let program = []
				let event = {}
				let el = document.createElement('html')
				el.innerHTML = nycEvents[0].description

				let divs = el.getElementsByTagName('div')
				// let spans = el.getElementsByTagName('span')
				for (let key in divs) {
					let day = {}
					let spans
					if (typeof divs[key] === 'object') {
						let moreDivs = divs[key].getElementsByTagName('div')
						spans = divs[key].getElementsByTagName('span')
						if (Object.keys(moreDivs).length > 0)
							day['date'] = spans['date'].innerHTML
						else {
							for (let k in spans) {
								if (typeof spans[k] === 'object')
									if (spans[k].id === 'bio')
										event[spans[k].id] = spans[k].innerHTML
									else day[spans[k].id] = spans[k].innerHTML
							}
						}
						if (Object.keys(day).length > 0) program.push(day)
					}
				}
				event.program = program
				nycEvents[0].description = event
				setNycEvents(nycEvents)
				// setMajorEvents(majorEvents)
			})
			.catch(error => console.error('Error:', error))
	}, [])

	const handleClick = () => {
		window.location.href =
			'https://www.eventbrite.com/e/introduction-to-diamond-way-buddhism-tickets-75976221925'
	}

	const getDates = () => {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		let fullDate
		if (nycEvents.length > 0) {
			let startDate = new Date(nycEvents[0].start_date)
			let endDate = new Date(nycEvents[0].end_date)
			let startMonth = startDate.getUTCMonth()
			let startDay = startDate.getUTCDate()
			let endMonth = endDate.getUTCMonth()
			let endDay = endDate.getUTCDate()
			let year = startDate.getFullYear()
			if (startMonth === endMonth) {
				fullDate =
					monthNames[startMonth].toUpperCase() +
					' ' +
					startDay +
					'-' +
					endDay +
					',' +
					' ' +
					year
			} else {
				fullDate =
					monthNames[startMonth] +
					' ' +
					startDay +
					'-' +
					monthNames[endMonth] +
					' ' +
					endDay
			}
			return fullDate
		} else return
	}

	return (
		<div className='program_container'>
			<div className='no_bio_container'>
				<Subtitle text={'PROGRAM'} />
				<div className='program'>
					<div className='program_about'>
						<div>
							<p className='program_about_p'>
								Each weekday night at 8pm, there is a guided meditation on the
								16th Karmapa, our main meditation practice. A short introduction
								will be provided for all newcomers. <br />
								<br />
								Every first Tuesday of a month, at 7:30pm, join us for a short
								talk on Diamond Way Buddhism. The lecture is followed by a
								guided meditation. All are welcome to join.
							</p>
						</div>
						<div>
							<p className='info_style'>
								All events are offered free of charge unless otherwise noted{' '}
							</p>
						</div>
					</div>
					<div className='program_daily'>
						<div>
							<p className='title_style'>Daily Meditation</p>
							<p className='subtitle_style'>MONDAY-FRIDAY @ 8PM</p>
							<hr style={{ margin: '30px 0 20px' }} />
							<p className='title_style'>
								Introduction to Diamond Way Buddhism
							</p>
							<p className='subtitle_style'>FIRST TUESDAY @ 7.30 PM</p>
						</div>
						<div>
							<button className='myButton' onClick={handleClick}>
								Reserve a Spot
							</button>
						</div>
					</div>
					<div className='program_event'>
						{nycEvents.length > 0 && (
							<>
								<p className='title_style'>Upcoming Event</p>
								<p className='subtitle_style'>
									<span
										className='subtitle_style link_add'
										onClick={() => bioModal()}>
										{nycEvents.length > 0 && nycEvents[0].title.toUpperCase()}{' '}
									</span>
									{getDates()}
								</p>
								<div style={{ flexGrow: '1', lineHeight: '2vmax' }}>
									{nycEvents.length > 0 &&
										nycEvents[0].description.program.map((day, index) => (
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
						)}
						<div style={{ transition: 'opacity 0.6s' }}>
							<p className='info_style'>Suggested donation</p>
						</div>
					</div>
				</div>
			</div>
			{nycEvents[0] && nycEvents[0].title && (
				<Bio
					showBio={showBio}
					bio={nycEvents[0].description.bio}
					title={nycEvents[0].title}
				/>
			)}
		</div>
	)
}

export default Program
