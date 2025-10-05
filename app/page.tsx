'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import RadioPlayer from '@/components/RadioPlayer'
import Link from 'next/link'

export default function Home() {
	const { play } = usePlayer()

	return (
		<div className='flex flex-col justify-center items-center gap-4 h-full'>
			<RadioPlayer />
			<div className='flex flex-col w-full justify-center items-center gap-4'>
				<div className='flex gap-4'>
					<Link href={'/1'}>cтраница 1</Link>
					<Link href={'/2'}>страница 2</Link>
				</div>
				<div className='flex gap-4'>
					<button onClick={() => play(src1)}>запись 1</button>
					<button onClick={() => play(src2)}>запись 2</button>
				</div>
			</div>
		</div>
	)
}

const src1 =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCohdkcRlTe9SCvjxXpVwWmEbTR8uZ2yFcKGLJs'
const src2 =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCoEqHiQh87Prs5SuYTCUpke2tV4XQBjazoqZL1'
