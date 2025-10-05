'use client'

import { usePlayer } from './PlayerContext'
import PlayerBarWavesAnimation from './Waves'

const ProgressBar = () => {
	const { timecode, duration, seek, isLive, isPlaying } = usePlayer()

	if (isLive) {
		return (
			<div className='grow'>
				<PlayerBarWavesAnimation playing={isPlaying} />
			</div>
		)
	}

	return (
		<input
			type='range'
			min={0}
			max={duration}
			step={0.1}
			value={timecode}
			onChange={(e) => seek(Number(e.target.value))}
			className='w-full accent-black'
		/>
	)
}

export default ProgressBar
