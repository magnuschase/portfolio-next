import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import Footer from '../components/Footer'
import Nav from '../components/Nav'

type MyProps = AppProps & { data: any, footer: any }

function MyApp({ Component, pageProps }: MyProps) {
	const navProps = { text: pageProps.data.menu_text, first: pageProps.data.first_name, last: pageProps.data.last_name }

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav props={navProps} />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
			<Footer data={pageProps.footer} />
		</>
	)
}
export default MyApp
