'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import Link from 'next/link'

const Page = () => {
	const { play } = usePlayer()
	return (
		<div className='flex flex-col gap-4'>
			<Link href={'/'}>назад со страницы Библиотека</Link>
			<button onClick={() => play(beatles_src)}>
				передача про битлз 20.07
			</button>
			<button onClick={() => play(tech_src)}>техвстреча 21.07</button>
		</div>
	)
}

const beatles_src =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCorlxyWusQhVOCPI7AobXt2jy1uJ6lGdaHBg04'
const tech_src =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCo1RosU9zBmFW5PUouC34HrbseOvEDTI8Gjakh'

export default Page
