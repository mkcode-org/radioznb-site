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
					<Image
						className='size-full'
						src='/assets/RADIO.jpg'
						alt='radio'
						width={1061}
						height={1000}
					/>
					<button
						onClick={() => setPlaying('playing')}
						className={`absolute cursor-pointer bottom-1/5 left-5/11 w-1/6 h-1/5 hover:opacity-50 ${
							playing === 'playing' && 'opacity-50'
						}`}
					>
						<Image fill src='/assets/play-sm.jpg' alt='play' sizes='10vw' />
					</button>
					<button
						onClick={() => setPlaying('stopped')}
						className={`absolute cursor-pointer bottom-1/5 right-1/7 w-1/6 h-1/5 hover:opacity-50 ${
							playing === 'stopped' && 'opacity-50'
						}`}
					>
						<Image fill src='/assets/stop-sm.jpg' alt='stop' sizes='10vw' />
					</button>
					{/* <div className='absolute h-1/10 w-2/5 bottom-16 right-0'>
						<Image
							className=''
							src='/assets/scale.jpg'
							alt='volume-scale'
							fill
						/>
					</div> */}
				</div>
			</WaveAnimation>
		</div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
