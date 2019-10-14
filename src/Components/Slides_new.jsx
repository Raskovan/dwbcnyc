import ole from '../assets/ole_front.jpg'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import '../styles/Slides.css'

const slides = [
	{
		id: 0,
		url: `${ole}`
	},
	{
		id: 1,
		url: `${ole}`
	},
	{
		id: 2,
		url: `${ole}`
	}
]

function SlidesNew() {
	const [index, set] = useState(0)
	const transitions = useTransition(slides[index], item => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses
	})
	// useEffect(
	// 	() => void setInterval(() => set(state => (state + 1) % 3), 3000),
	// 	[]
	// )
	return transitions.map(({ item, props, key }) => (
		<div>
			<animated.div
				key={key}
				className='bg'
				style={{
					...props,
					backgroundImage: `url(${ole})`
				}}
			/>
		</div>
	))
}

export default SlidesNew
