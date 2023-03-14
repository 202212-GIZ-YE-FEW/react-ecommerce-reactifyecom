import Head from 'next/head'
import Intro from '@/sections/Intro'
import Products from '@/sections/Products'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main>
				<h1>Welcome Home!</h1>{' '}
			</main>
			<Intro />
			<Products />
		</>
	)
}
