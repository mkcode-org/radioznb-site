'use client'

import Image from 'next/image'
import { useState } from 'react'
import WaveAnimation from './Waves'
import StreamProvider from './StreamProvider'

const RadioPlayer = () => {
	const [playing, setPlaying] = useState<PlayerState>(undefined)

	return (
		<div className='flex justify-center m-8'>
			<StreamProvider playing={playing} />
			<WaveAnimation playing={playing}>
				<div className='relative'>
					<Image src='/assets/RADIO.jpg' alt='radio' width={602} height={602} />
					<button
						onClick={() => setPlaying('playing')}
						className={`absolute cursor-pointer left-5/11 w-1/6 h-1/5 bottom-1/6 hover:opacity-50 ${
							playing === 'playing' && 'opacity-50'
						}`}
					>
						<Image fill src='/assets/play-sm.jpg' alt='play' />
					</button>
					<button
						onClick={() => setPlaying('stopped')}
						className={`absolute cursor-pointer right-1/7 w-1/6 h-1/5 bottom-1/6 hover:opacity-50 ${
							playing === 'stopped' && 'opacity-50'
						}`}
					>
						<Image fill src='/assets/stop-sm.jpg' alt='stop' />
					</button>
				</div>
			</WaveAnimation>
		</div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
