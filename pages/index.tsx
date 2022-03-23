import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/FrontPage.module.css'
import Nav from '../components/Nav'

const Home: NextPage = ({ data }: any) => {
	const navProps = { text: data.menu_text, first: data.first_name, last: data.last_name }
	return (
		<div>
			<Head>
				<title >Jakub Kapała</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav props={navProps} />

		</div>
	)
}

export async function getStaticProps() {
	const req = { name: "main" }

	const res = await fetch(`${process.env.API_URL}/single`, { method: 'POST', body: JSON.stringify(req) })
	const data = await res.json()

	return {
		props: { data },
	}
}

export default Home
