'use client'

import Image from 'next/image'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { PlayerState } from './RadioPlayer'

const WaveAnimation: FC<PropsWithChildren & { playing: PlayerState }> = ({
	children,
	playing,
}) => {
	const [src, setSrc] = useState<Wave>(waves[0])

	useEffect(() => {
		setSrc(waves[Math.floor(Math.random() * waves.length)])

		const interval = setInterval(() => {
			setSrc((prev) => {
				const nextIndex = (waves.indexOf(prev) + 1) % waves.length
				return waves[nextIndex]
			})
		}, 2000)
		return () => clearInterval(interval)
	}, [playing])

	if (playing !== 'playing') return children
	return (
		<div className='relative inline-block'>
			<WavesLeft src={src.left} />
			{children}
			<WavesRight src={src.right} />
		</div>
	)
}

const WavesLeft: FC<{ src: string[] }> = ({ src }) => {
	return (
		<div className='absolute -left-48 top-8/12 flex gap-6'>
			<div
				className={`animate-fadeInOut opacity-0 -translate-y-[30%]`}
				style={{ animationDelay: '500ms' }}
			>
				<Image src={src[0]} alt='wave-l-1' width={50} height={50} />
			</div>
			<div
				className={`animate-fadeInOut opacity-0 -translate-y-[15%]`}
				style={{ animationDelay: '250ms' }}
			>
				<Image src={src[1]} alt='wave-l-2' width={35} height={35} />
			</div>
			<div
				className={`animate-fadeInOut opacity-0`}
				style={{ animationDelay: '0ms' }}
			>
				<Image src={src[2]} alt='wave-l-3' width={20} height={20} />
			</div>
		</div>
	)
}

const WavesRight: FC<{ src: string[] }> = ({ src }) => {
	return (
		<div className='absolute -right-48 top-8/12 flex gap-6'>
			<div
				className={`animate-fadeInOut opacity-0`}
				style={{ animationDelay: '0ms' }}
			>
				<Image src={src[0]} alt='wave-r-1' width={20} height={20} />
			</div>
			<div
				className={`animate-fadeInOut opacity-0 -translate-y-[15%]`}
				style={{ animationDelay: '250ms' }}
			>
				<Image src={src[1]} alt='wave-r-2' width={35} height={35} />
			</div>
			<div
				className={`animate-fadeInOut opacity-0 -translate-y-[30%]`}
				style={{ animationDelay: '500ms' }}
			>
				<Image src={src[2]} alt='wave-r-3' width={50} height={50} />
			</div>
		</div>
	)
}

const waves = [
	{
		left: [
			'/assets/waves/lwave-11.png',
			'/assets/waves/lwave-21.png',
			'/assets/waves/lwave-31.png',
		],
		right: [
			'/assets/waves/rwave-11.png',
			'/assets/waves/rwave-21.png',
			'/assets/waves/rwave-31.png',
		],
	},
	{
		left: [
			'/assets/waves/lwave-12.png',
			'/assets/waves/lwave-22.png',
			'/assets/waves/lwave-32.png',
		],
		right: [
			'/assets/waves/rwave-12.png',
			'/assets/waves/rwave-22.png',
			'/assets/waves/rwave-32.png',
		],
	},
	{
		left: [
			'/assets/waves/lwave-13.png',
			'/assets/waves/lwave-23.png',
			'/assets/waves/lwave-33.png',
		],
		right: [
			'/assets/waves/rwave-13.png',
			'/assets/waves/rwave-23.png',
			'/assets/waves/rwave-33.png',
		],
	},
]

type Wave = (typeof waves)[0]

export default WaveAnimation
