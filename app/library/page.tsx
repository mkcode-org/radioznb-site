'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import Link from 'next/link'

const Page = () => {
	const { play } = usePlayer()
	return (
		<div className='flex flex-col gap-4'>
			<Link href={'/'}>назад со страницы Библиотека</Link>
			<button onClick={() => play(src1)}>запись 1</button>
			<button onClick={() => play(src2)}>запись 2</button>
		</div>
	)
}

const src1 =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCohdkcRlTe9SCvjxXpVwWmEbTR8uZ2yFcKGLJs'
const src2 =
	'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCoEqHiQh87Prs5SuYTCUpke2tV4XQBjazoqZL1'

export default Page
