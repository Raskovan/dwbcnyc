import React from 'react'
import Subtitle from './Subtitle'
import Teacher from './Teacher'
import '../styles/Teachers.css'

function Teachers(props) {
	return (
		<div>
			<Subtitle text={'DIAMOND WAY TEACHERS'} />
			<div className='teachers'>
				<Teacher
					name={'H.H. 16th Karmapa Rangjung Rigpe Dorje'}
					description={`His Holiness the 16th Karmapa Rangjung Rigpe Dorje (1924 -1981) was a completely enlightened Buddhist master. He was the leader of the Karma Kagyu lineage, and was also respected and consulted by high lamas of other lineages. He was given many names expressing this respect, including “King of the Yogis”.`}
					image={require(`../assets/16_Karmapa.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/16th-karmapa/'
					}
				/>
				<Teacher
					name={'H.H. 17th Karmapa Trinley Thaye Dorje'}
					description={`Thaye Dorje, His Holiness the 17th Gyalwa Karmapa is the head of the Karma Kagyu lineage of Tibetan Buddhism. He is the spiritual leader of around 900 monasteries, institutions and centers in 68 countries around the world.`}
					homepage={'https://www.karmapa.org/'}
					image={require(`../assets/17_Karmapa.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/17th-karmapa/'
					}
				/>
			</div>
			<div className='teachers'>
				<Teacher
					name={'Shamar Rinpoche'}
					description={`In the spiritual hierarchy of the Karma Kagyu school, the Shamarpa is second only to the Karmapa. \nHe is the emanation of Amitabha, the Buddha of Limitless Light: a living example of the appearance of Amitabha in our world in the form of a Mahabodhisattva.`}
					homepage={'https://www.shamarpa.org/'}
					image={require(`../assets/Shamar.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/shamar-rinpoche/'
					}
				/>
				<Teacher
					name={'Lopön Tsechu Rinpoche'}
					description={`A key figure for Buddhism in Nepal, Lopön Tsechu Rinpoche had a huge influence in the West. He oversaw the construction of the largest Buddhist stupa in the West, and gave many teachings.`}
					image={require(`../assets/Lopen_Techu.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/lopon-tsechu-rinpoche/'
					}
				/>
			</div>
			<div className='teachers'>
				<Teacher
					name={'Lama Ole Nydahl'}
					description={`Lama Ole Nydahl is a Buddhist teacher in the tradition of the Karma Kagyu lineage, and founder of over 650 Buddhist centers worldwide.`}
					homepage={'https://www.lama-ole-nydahl.org/'}
					image={require(`../assets/ole.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/lama-ole-nydahl/'
					}
				/>
				<Teacher
					name={'Hannah Nydahl'}
					description={`Hannah Nydahl was a student of H.H. the 16th Karmapa Rangjung Rigpe Dorje, the great Lopön Tsechu Rinpoche, and many other teachers. \nTogether with her husband Lama Ole, she helped to bring the authentic teachings of the Karma Kagyu to the West.`}
					image={require(`../assets/hannah.jpg`)}
					link={
						'https://www.diamondway-buddhism.org/buddhist-teachers/hannah-nydahl/'
					}
				/>
			</div>
		</div>
	)
}

export default Teachers
