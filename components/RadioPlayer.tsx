'use client'

import Image from 'next/image'
import { useState } from 'react'
import StreamProvider from './StreamProvider'
import Volume from './Volume'
import WaveAnimation from './Waves'

const RadioPlayer = () => {
	const [playing, setPlaying] = useState<PlayerState>(undefined)
	const [volume, setVolume] = useState(0.6)

	return (
		<div className='flex justify-center'>
			<StreamProvider playing={playing} volume={volume} />
			<WaveAnimation playing={playing}>
				<div className='relative' onDragStart={(e) => e.preventDefault()}>
					<Image
						priority
						className='size-full'
						src='/assets/RADIO.jpg'
						alt='radio'
						width={1061}
						height={1000}
					/>
					<button
						onClick={() => setPlaying('playing')}
						className={`absolute cursor-pointer bottom-1/5 left-5/11 w-1/6 h-1/5 hover:scale-115 ${
							playing === 'playing' && 'opacity-50'
						}`}
					>
						<Image
							width={151}
							height={178}
							src='/assets/play-sm.jpg'
							alt='play'
						/>
					</button>
					<button
						onClick={() => setPlaying('stopped')}
						className={`absolute cursor-pointer bottom-1/5 right-1/7 w-1/6 h-1/5 hover:scale-115 ${
							playing === 'stopped' && 'opacity-50'
						}`}
					>
						<Image
							width={157}
							height={170}
							src='/assets/stop-sm.jpg'
							alt='stop'
						/>
					</button>
					<Volume volume={volume} setVolume={setVolume} />
				</div>
			</WaveAnimation>
		</div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
