import React from 'react'
import '../styles/Teachers.css'

function Teacher(props) {
	return (
		<div className='teacher'>
			<div className='teacher_image_container'>
				<img
					src={props.image}
					width='100%'
					alt={props.name}
					style={{ filter: 'grayscale(100%)' }}
				/>
			</div>
			<div className='teacher_description_container'>
				<div>
					<a href={props.link} target='_new' className='sub_sub_title link_add'>
						{props.name}
					</a>
					<p className='secondary_text teacher_description'>
						{props.description}
					</p>
				</div>
				<div>
					{props.homepage && (
						<a href={props.homepage} target='_new' className='caption_text'>
							Homepage of {props.name}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Teacher
