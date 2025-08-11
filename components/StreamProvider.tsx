'use client'

import { FC, useEffect, useRef } from 'react'
import { PlayerState } from './RadioPlayer'

const StreamProvider: FC<{ playing: PlayerState; volume: number }> = ({
	playing,
	volume,
}) => {
	const ref = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		if (!ref.current) return
		if (playing === 'playing') {
			ref.current.volume = volume
			ref.current
				.play()
				.catch((error) => console.warn('Playback failed:', error))
		} else {
			ref.current.pause()
		}
	}, [playing, volume])

	return <audio ref={ref} autoPlay src={url} />
}

const url = 'https://radiopotok1.ru/orfej'

export default StreamProvider
