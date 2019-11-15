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

function splitResponce(response) {
	let firstStr = response.split(
		'/**/jQuery18203743304502847564_1570990678398'
	)[1]
	return JSON.parse(firstStr.substr(1).slice(0, -2))
}

export function parseResponse(response) {
	let nycEvents = splitResponce(response).filter(
		event => event.location_summary === 'New York, NY'
	)
	//Parsing HTML FROM RESPONSE
	for (let i = 0; i < nycEvents.length; i++) {
		let program = []
		let event = {}
		let el = document.createElement('html')
		el.innerHTML = nycEvents[i].description

		let divs = el.getElementsByTagName('div')
		for (let key in divs) {
			if (!divs[key].id) continue
			let day = {}
			let spans
			if (typeof divs[key] === 'object') {
				let moreDivs = divs[key].getElementsByTagName('div')
				spans = divs[key].getElementsByTagName('span')
				if (Object.keys(moreDivs).length > 0) {
					day['date'] = spans['date'].innerHTML
					let moreSpans = moreDivs[0].getElementsByTagName('span')
					for (let c in moreSpans) {
						if (moreSpans[c].id) {
							if (day[moreSpans[c].id]) {
								day[moreSpans[c].id].push(moreSpans[c].innerHTML)
							} else {
								day[moreSpans[c].id] = []
								day[moreSpans[c].id].push(moreSpans[c].innerHTML)
							}
						}
					}
				} else {
					for (let k in spans) {
						if (typeof spans[k] === 'object')
							if (spans[k].id === 'bio' || spans[k].id === 'eventbrite')
								event[spans[k].id] = spans[k].innerHTML
							else {
								if (spans[k].id === 'date')
									day[spans[k].id] = spans[k].innerHTML
								else day[spans[k].id] = [spans[k].innerHTML]
							}
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

export function parseRegularResponse(response) {
	let majorEvents = splitResponce(response).filter(
		event => event.major === true
	)
	return majorEvents
}
