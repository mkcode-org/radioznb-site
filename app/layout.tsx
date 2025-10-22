import ConvexContextProvider from '@/components/ConvexContext'
import PlayerBar from '@/components/PlayerBar/Player'
import { PlayerContextProvider } from '@/components/PlayerContext'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import './globals.css'
import { BackgroundImage } from '@/components/BackgroundImage'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='mb-34'>
				<ConvexContextProvider>
					<PlayerContextProvider>
						<ThemeProvider>
							<div className='sm:px-16 p-6'>{children}</div>
							<PlayerBar />
							<BackgroundImage />
						</ThemeProvider>
					</PlayerContextProvider>
				</ConvexContextProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'радио зимы не будет',
	description: 'зе бест рэдио ин зе ворлд.',
	openGraph: {
		title: 'радио зимы не будет',
		images: [
			{
				url: 'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCoNpBYhL3AWX1093yJ5FIsDH2Ehjv6awMzcZTC',
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
}
