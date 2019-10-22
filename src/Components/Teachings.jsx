import React from 'react'
import Subtitle from './Subtitle'
import '../styles/Teachings.css'

function Center() {
	return (
		<div style={{ marginBottom: '65px' }}>
			<Subtitle text={'TEACHINGS'} />
			<div className='teachings_image'>
				<img
					src={require(`../assets/teachings.jpg`)}
					width='100%'
					alt='NYC Center'
				/>
			</div>
			<div className='teachings_about'>
				<p className='teachings_text_p'>
					In Buddhism, meditation means “effortlessly remaining in what is.”
					This state may be brought about by calming and holding the mind, by
					realizing compassion and wisdom, or by working with the body’s energy
					channels and meditating on Buddha forms of light and energy. The most
					effective method is the constant identification with one’s own Buddha
					nature which is taught in the Diamond Way. When the oneness of the
					seer, what is seen, and the act of seeing is unbroken – during and
					between the times of meditation – the goal of the Great Seal (skt.
					Mahamudra) is reached. <br />
					<br /> The main practice in all our centers is the Guru Yoga
					meditation on the 16th Karmapa. This meditation is guided in English
					and involves visualization and mantra recitation, allowing space,
					clarity and joy to naturally arise.
				</p>
			</div>
		</div>
	)
}

export default Center
