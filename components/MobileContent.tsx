import Image from 'next/image'

const Mobile = () => {
	return (
		<div className='flex flex-wrap gap-4 justify-around sm:justify-center'>
			<div className='relative size-26 scale-y-90'>
				<Image
					src='/assets/fb.png'
					fill
					style={{ objectFit: 'contain' }}
					alt='fb'
				/>
			</div>
			<div className='relative size-26 scale-y-90'>
				<Image
					src='/assets/vk.png'
					fill
					style={{ objectFit: 'contain' }}
					alt='vk'
				/>
			</div>
			<div className='relative size-26 scale-y-90'>
				<Image
					src='/assets/m3u.png'
					fill
					style={{ objectFit: 'contain' }}
					alt='m3u'
				/>
			</div>
			<div className='relative size-26 scale-y-90'>
				<Image
					src='/assets/tg.png'
					fill
					style={{ objectFit: 'contain' }}
					alt='tg'
				/>
			</div>
			<div className='relative w-full h-16 scale-y-125'>
				<Image
					src='/assets/chat.png'
					fill
					style={{ objectFit: 'contain' }}
					alt='chat'
				/>
			</div>
		</div>
	)
}

export default Mobile
