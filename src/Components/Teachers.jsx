import React from 'react'
import Subtitle from './Subtitle'
import Teacher from './Teacher'

function Teachers() {
	return (
		<div>
			<Subtitle text={'OUR TEACHERS'} />
			<div
				style={{
					display: 'flex',
					width: '100%',
					marginBottom: '35px',
					justifyContent: 'space-between'
				}}>
				<Teacher
					name={'H.H. 16th Karmapa Rangjung Rigpe Dorje'}
					description={`His Holiness the 16th Karmapa Rangjung Rigpe Dorje (1924 -1981)was a completely enlightened Buddhist master. He was the leader of the Karma Kagyu lineage, and was also respected and consulted by high lamas of other lineages. He was given many names expressing this respect, including “King of the Yogis”.`}
					image={require(`../assets/16_Karmapa.jpg`)}
				/>
				<Teacher
					name={'H.H. 17th Karmapa Trinley Thaye Dorje'}
					description={`Thaye Dorje, His Holiness the 17th Gyalwa Karmapa is the head of the Karma Kagyu lineage of Tibetan Buddhism. He is the spiritual leader of around 900 monasteries, institutions and centers in 68 countries around the world.`}
					image={require(`../assets/17_Karmapa.jpg`)}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					marginBottom: '35px',
					justifyContent: 'space-between'
				}}>
				<Teacher
					name={'Shamar Rinpoche'}
					description={`In the spiritual hierarchy of the Karma Kagyu school, the Shamarpa is second only to the Karmapa. \nHe is the emanation of Amitabha, the Buddha of Limitless Light: a living example of the appearance of Amitabha in our world in the form of a Mahabodhisattva.`}
					image={require(`../assets/Shamar.jpg`)}
				/>
				<Teacher
					name={'Lopon Tsechu Rinpoche'}
					description={`A key figure for Buddhism in Nepal, Lopön Tsechu Rinpoche had a huge influence in the West. He oversaw the construction of the largest Buddhist stupa in the West, and gave many teachings.`}
					image={require(`../assets/Lopen_Techu.jpg`)}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					marginBottom: '15px',
					justifyContent: 'space-between'
				}}>
				<div style={{ width: '50%', marginRight: '30px' }}>
					<img
						src={require(`../assets/Ole_Hannah.jpg`)}
						style={{ filter: 'grayscale(100%)' }}
						width='100%'
						alt='Ole and Hannah Nydahl'
					/>
				</div>
				<div style={{ width: '50%' }}>
					<p
						style={{
							fontSize: '1.6vmax',
							margin: '0 0 10px',
							color: '#d22238',
							fontWeight: '600'
						}}>
						Lama Ole Nydahl
					</p>
					<p
						style={{
							fontSize: '1.3vmax',
							lineHeight: '1.9vmax',
							margin: '0 0 25px',
							color: '#2b2b2b',
							fontWeight: '300',
							whiteSpace: 'pre-wrap'
						}}>
						Lama Ole Nydahl is a Buddhist teacher in the tradition of the Karma
						Kagyu lineage, and founder of over 650 Buddhist centers worldwide.
					</p>
					<p
						style={{
							fontSize: '1.6vmax',
							margin: '0 0 10px',
							color: '#d22238',
							fontWeight: '600'
						}}>
						Hannah Nydahl
					</p>
					<p
						style={{
							fontSize: '1.3vmax',
							lineHeight: '1.9vmax',
							margin: '0',
							color: '#2b2b2b',
							fontWeight: '300',
							whiteSpace: 'pre-wrap'
						}}>
						Hannah Nydahl was a student of H.H. the 16th Karmapa Rangjung Rigpe
						Dorje, the great Lopön Tsechu Rinpoche, and many other teachers.
						Together with her husband Lama Ole, she helped to bring the
						authentic teachings of the Karma Kagyu to the West.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Teachers
