import '@/styles/globals.css'
import '@/styles/products.css'
// import Footer from './Footer'
// import Navbar from './Navbar'

import { Inter } from 'next/font/google'
import Footer from './Footer'
import Navbar from './Navbar'


const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
	return (
		<main className={`${inter.variable} font-sans`}>
			<Navbar/>
			<Footer/>
			<Component {...pageProps} />
		</main>
	)
}
