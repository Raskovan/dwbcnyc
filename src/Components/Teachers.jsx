import React from 'react'
import PropTypes from 'prop-types'
import Subtitle from './Subtitle'
import Teacher from './Teacher'
import '../styles/Teachers.css'

const config = window.config

export default function Teachers(props) {
	const vars = config ? config : process.env
	const { images, text } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? Math.floor((window.innerWidth * 15) / 100)
			: Math.floor((window.innerHeight * 15) / 100)
	)
	const getLink = name => {
		const teacherPublicId = images.filter(
			image => image.context.custom.caption === name
		)[0].public_id
		return `${vars.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teacherPublicId}.jpg`
	}

	const compare = (a, b) => {
		if (a.fields.order > b.fields.order) return 1
		if (a.fields.order < b.fields.order) return -1
		return 0
	}
	text.sort(compare)

	return (
		<>
			<Subtitle text={'TEACHERS'} />
			<div className="teachers">
				{text.map((teacher, index) => (
					<Teacher
						key={index}
						name={teacher.fields.name}
						description={teacher.fields.description}
						image={getLink(teacher.fields.name)}
						homepage={teacher.fields.homepage}
						link={teacher.fields.link}
					/>
				))}
			</div>
		</>
	)
}

Teachers.propTypes = {
	images: PropTypes.array,
	text: PropTypes.array
}
