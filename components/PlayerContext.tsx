'use client'

import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useLivestreamStatus } from './hooks/useLivestreamStatus'

export const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [src, setSrc] = useState('')
	const [title, setTitle] = useState('')
	const [isPlaying, setIsPlaying] = useState(false)
	const [timecode, setTimecode] = useState(defaultState.timecode)
	const [duration, setDuration] = useState(defaultState.duration)
	const [isLive, setIsLive] = useState(defaultState.isLive)
	const [volume, setVolume] = useState(defaultState.volume)
	const livestream = useLivestreamStatus()

	const audioRef = useRef<HTMLAudioElement | null>(null)

	useEffect(() => {
		const saved = getLocalStorageContext()

		setSrc(saved.src)
		setTitle(saved.title)
		setTimecode(saved.timecode)
		setDuration(saved.duration)
		setIsLive(saved.isLive)
		setVolume(saved.volume)
	}, [])

	useEffect(() => {
		localStorage.setItem(
			'player-context',
			JSON.stringify({
				src,
				title,
				isPlaying,
				timecode,
				duration,
				isLive,
				volume,
			})
		)
	}, [src, title, duration, isLive, isPlaying, timecode, volume])

	useEffect(() => {
		if (!audioRef.current) {
			audioRef.current = new Audio()
		}

		const audio = audioRef.current

		let last = 0
		const interval = 1000

		const onTimeUpdate = () => {
			const now = performance.now()
			if (now - last >= interval) {
				last = now
				setTimecode(audio.currentTime)
			}
		}

		const onLoaded = () => {
			setSrc(audio.src)
			setDuration(isFinite(audio.duration) ? audio.duration : 0)
		}
		const onEnded = () => {
			setIsPlaying(false)
			setTimecode(0)
		}
		const onPause = () => setIsPlaying(false)
		const onPlay = () => setIsPlaying(true)

		audio.addEventListener('timeupdate', onTimeUpdate)
		audio.addEventListener('loadedmetadata', onLoaded)
		audio.addEventListener('play', onPlay)
		audio.addEventListener('pause', onPause)
		audio.addEventListener('ended', onEnded)

		return () => {
			audio.removeEventListener('timeupdate', onTimeUpdate)
			audio.removeEventListener('loadedmetadata', onLoaded)
			audio.removeEventListener('play', onPlay)
			audio.removeEventListener('pause', onPause)
			audio.removeEventListener('ended', onEnded)
		}
	}, [])

	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return
		audio.volume = volume
	}, [volume])

	const play = async ({ src: newSrc, title, isLive = false }: PlayOptions) => {
		const audio = audioRef.current
		if (!audio) return
		audio.pause()
		if (isLive) {
			audio.currentTime = 0
			audio.src = newSrc
		} else {
			if (src === newSrc) audio.currentTime = timecode
			if (audio.src !== newSrc) {
				audio.src = newSrc
			}
		}
		setIsLive(isLive)
		setTitle(title)

		await audio.play()
	}

	const pause = () => {
		const audio = audioRef.current
		if (!audio) return
		audio.pause()
	}

	const toggle = () => {
		const audio = audioRef.current
		if (!audio) return
		if (audio.paused) {
			play({ src, title, isLive })
		} else {
			pause()
		}
	}

	const seek = (time: number) => {
		const audio = audioRef.current
		if (!audio || isLive) return
		audio.currentTime = time
		setTimecode(time)
	}

	return (
		<PlayerContext.Provider
			value={{
				src,
				title,
				isPlaying,
				timecode,
				duration,
				isLive,
				setIsLive,
				play,
				pause,
				toggle,
				seek,
				volume,
				setVolume,
				livestream,
			}}
		>
			{children}
		</PlayerContext.Provider>
	)
}

const defaultState: PlayerContextType = {
	src: '',
	title: '',
	isPlaying: false,
	timecode: 0,
	duration: 0,
	isLive: true,
	setIsLive: () => {},
	play: () => {},
	pause: () => {},
	seek: () => {},
	toggle: () => {},
	volume: 1,
	setVolume: () => {},
	livestream: {
		art: null,
		broadcast_start: null,
		is_live: false,
		streamer_name: '',
	},
}

const PlayerContext = createContext<PlayerContextType>(defaultState)

export const usePlayer = () => useContext(PlayerContext)

const getLocalStorageContext = (): PlayerContextType => {
	try {
		const raw = localStorage.getItem('player-context')
		if (raw) {
			return { ...defaultState, ...JSON.parse(raw) }
		}
	} catch {}
	return defaultState
}

export const stream: Stream = {
	src: 'https://server.radioznb.ru/listen/radioznb-live/radio.mp3',
	title: 'радио зимы не будет',
	isLive: true,
}

export type Stream = {
	src: string
	title: string
	isLive?: boolean
}

type PlayerContextType = {
	src: string
	title: string
	isPlaying: boolean
	timecode: number
	duration: number
	isLive: boolean
	setIsLive: (arg: boolean) => void
	play: (props: PlayOptions) => void
	pause: () => void
	toggle: () => void
	seek: (time: number) => void
	volume: number
	setVolume: (vol: number) => void
	livestream:
		| {
				art: string | null
				broadcast_start: number | null
				is_live: boolean
				streamer_name: string
		  }
		| undefined
}

type PlayOptions = {
	src: string
	title: string
	isLive?: boolean
}
