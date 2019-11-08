import React from 'react'
import Subtitle from './Subtitle'
import Teacher from './Teacher'
import '../styles/Teachers.css'
import { teachersTexts } from '../texts.js'

export default function Teachers(props) {
	const { images } = props
	const imageWidth = Math.floor(
		window.innerWidth > window.innerHeight
			? Math.floor((window.innerWidth * 15) / 100)
			: Math.floor((window.innerHeight * 15) / 100)
	)
	const getLink = name => {
		let teacherPublicId = images.filter(
			image => image.context.custom.caption === name
		)[0].public_id
		return `${process.env.REACT_APP_IMAGE_BASE_URL}/w_${imageWidth},dpr_2.0/${teacherPublicId}.jpg`
	}

	return (
		<>
			<Subtitle text={'DIAMOND WAY TEACHERS'} />
			<div className='teachers'>
				{teachersTexts.map((teacher, index) => (
					<Teacher
						key={index}
						name={teacher.name}
						description={teacher.description}
						image={getLink(teacher.name)}
						homepage={teacher.homepage}
						link={teacher.link}
					/>
				))}
			</div>
		</>
	)
}
