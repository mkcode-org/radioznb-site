import Mobile from '@/components/MobileContent'
import RadioPlayer from '@/components/RadioPlayer'

export default function Home() {
	return (
		<div className='flex flex-col gap-4 m-4 h-full sm:m-8'>
			<RadioPlayer />
			<Mobile />
		</div>
	)
}
