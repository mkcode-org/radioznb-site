import type { Metadata } from 'next'
import './globals.css'
import { PlayerContextProvider } from '@/components/Player/PlayerContext'
import PlayerBar from '@/components/Player/Player'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='m-4'>
				<PlayerContextProvider>
					{children}
					<PlayerBar />
				</PlayerContextProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'радио зимы не будет — next',
}
