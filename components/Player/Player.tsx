'use client'

import Image from 'next/image'
import { usePlayer } from './PlayerContext'
import ProgressBar from './ProgressBar'
import VolumeBar from './VolumeBar'

const PlayerBar = () => {
	const { isPlaying, toggle, isLive, play } = usePlayer()
	const icon = isPlaying ? 'stop' : 'play'

	return (
		<div className='fixed flex items-center justify-center bottom-16 left-4 right-4 h-16'>
			<div className='flex max-w-3xl w-full border-black border-2 h-full p-4 gap-2'>
				<button onClick={toggle}>
					<Image
						priority
						width={64}
						height={64}
						className='w-auto h-full'
						src={`/assets/${icon}-sm.jpg`}
						alt='play'
					/>
				</button>
				{!isLive && (
					<button
						className={`m-auto w-fit animate-pulse`}
						onClick={() => play(orpheyStream, true)}
					>
						🔴
					</button>
				)}
				<ProgressBar />
				<VolumeBar />
			</div>
		</div>
	)
}

const orpheyStream = 'https://radiopotok1.ru/orfej'

export default PlayerBar
