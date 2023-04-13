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
	];
	let fullDate;
	const startDate = new Date(event.start_date);
	const endDate = new Date(event.end_date);
	const startMonth = startDate.getUTCMonth();
	const startDay = startDate.getUTCDate();
	const endMonth = endDate.getUTCMonth();
	const endDay = endDate.getUTCDate();
	const year = startDate.getFullYear();
	if ((startMonth === endMonth && startDay === endDay) || !event.end_date) {
		fullDate = monthNames[startMonth].toUpperCase() + '\u00A0' + startDay + ',' + '\u00A0' + year;
	} else if (startMonth === endMonth) {
		fullDate = monthNames[startMonth].toUpperCase() + '\u00A0' + startDay + '-' + endDay + ',' + '\u00A0' + year;
	} else {
		fullDate = monthNames[startMonth] + '\u00A0' + startDay + '-' + monthNames[endMonth] + '\u00A0' + endDay + ',' + '\u00A0' + year;
	}
	return fullDate;
}

function splitResponce(response) {
	const firstStr = response.split('/**/jQuery18203743304502847564_1570990678398')[1];
	return JSON.parse(firstStr.substr(1).slice(0, -2));
}

export function parseResponse(response) {
	const nycEvents = splitResponce(response).filter(event => event.location_summary === 'New York, NY');
	//Parsing HTML FROM RESPONSE
	for (let i = 0; i < nycEvents.length; i++) {
		const program = [];
		const event = {};
		const el = document.createElement('html');
		el.innerHTML = nycEvents[i].description;
		const divs = el.getElementsByTagName('div');
		for (const key in divs) {
			if (!divs[key].id) continue;
			const day = {};
			let spans;
			if (typeof divs[key] === 'object') {
				const moreDivs = divs[key].getElementsByTagName('div');
				spans = divs[key].getElementsByTagName('span');
				console.log(spans['date']);
				console.log(nycEvents[i]);
				if (Object.keys(moreDivs).length > 0) {
					day['date'] = spans['date'] && spans['date'].innerHTML;
					const moreSpans = moreDivs[0].getElementsByTagName('span');
					for (const c in moreSpans) {
						if (moreSpans[c].id) {
							if (day[moreSpans[c].id]) {
								day[moreSpans[c].id].push(moreSpans[c].innerHTML);
							} else {
								day[moreSpans[c].id] = [];
								day[moreSpans[c].id].push(moreSpans[c].innerHTML);
							}
						}
					}
				} else {
					for (const k in spans) {
						if (typeof spans[k] === 'object')
							if (spans[k].id === 'bio' || spans[k].id === 'eventbrite') event[spans[k].id] = spans[k].innerHTML;
							else {
								if (spans[k].id === 'date') day[spans[k].id] = spans[k].innerHTML;
								else day[spans[k].id] = [spans[k].innerHTML];
							}
					}
				}
				if (Object.keys(day).length > 0) program.push(day);
			}
		}
		console.log(program);
		event.program = program;
		nycEvents[i].description = event;
	}
	return nycEvents;
}

export function parseRegularResponse(response) {
	const majorEvents = splitResponce(response).filter(event => event.major);
	return majorEvents;
}
