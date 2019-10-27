export function getDates(event) {
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
	let startDate = new Date(event.start_date)
	let endDate = new Date(event.end_date)
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
}

export function parseResponse(response) {
	let firstStr = response.split(
		'/**/jQuery18203743304502847564_1570990678398'
	)[1]
	let result = JSON.parse(firstStr.substr(1).slice(0, -2))
	let nycEvents = result.filter(
		event => event.location_summary === 'New York, NY'
	)
	// let majorEvents = result.filter(event => event.major === true)

	//Parsing HTML FROM RESPONSE
	for (let i = 0; i < nycEvents.length; i++) {
		let program = []
		let event = {}
		let el = document.createElement('html')
		el.innerHTML = nycEvents[i].description

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
							if (spans[k].id === 'bio') event[spans[k].id] = spans[k].innerHTML
							else day[spans[k].id] = spans[k].innerHTML
					}
				}
				if (Object.keys(day).length > 0) program.push(day)
			}
		}
		event.program = program
		nycEvents[i].description = event
	}
	return nycEvents
}
