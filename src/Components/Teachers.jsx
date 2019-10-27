import React from 'react'
import Subtitle from './Subtitle'
import Teacher from './Teacher'
import '../styles/Teachers.css'
import { teachersTexts } from '../texts.js'

export default function Teachers() {
	return (
		<div>
			<Subtitle text={'DIAMOND WAY TEACHERS'} />
			<div className='teachers'>
				{teachersTexts.map((teacher, index) => (
					<Teacher
						key={index}
						name={teacher.name}
						description={teacher.description}
						image={require(`../assets/${teacher.image}`)}
						homepage={teacher.homepage}
						link={teacher.link}
					/>
				))}
			</div>
		</div>
	)
}
