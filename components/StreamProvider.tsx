import { FC } from 'react'
import { PlayerState } from './RadioPlayer'

const StreamProvider: FC<{ playing: PlayerState }> = ({ playing }) => {
	if (playing !== 'playing') return null
	return <audio autoPlay src={url} />
}

const url = 'https://radiopotok1.ru/orfej'

export default StreamProvider
