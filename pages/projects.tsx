// Libraries
import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
// Components
import styles from '../styles/Projects.page.module.scss'
import ProjectItem from '../components/ProjectItem'
import Layout from '../components/Layout/Layout'

type ProjectProps = {
	date: string,
	desc: string,
	gallery: Array<string>,
	post_content: string,
	technologies: Array<string>
	title: string,
	github: string
}

const Projects: NextPage = ({ data, footer, projects }: any) => {
	const navProps = { text: data.menu_text, first: data.first_name, last: data.last_name }
	console.log(projects)
	return (
		<Layout>
			<Head>
				<title >Projects</title>
				<meta name="description" content="Jakub Kapała - kontakt" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.name}>Projects</h1>
				<motion.div initial={{ x: 2000, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}
					exit={{ x: 2000, opacity: 0, transition: { duration: 1 } }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{projects.map((element: ProjectProps) => <ProjectItem key={element.title} data={element} />)}
				</motion.div>
			</main>
		</Layout>
	)
}

// Fetch data from API
export async function getServerSideProps(context: any) {
	const req = { name: "main" }

	const res = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const data = await res.json()

	req.name = 'footer'
	const footerRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const footer = await footerRes.json()

	const projectsRes = await fetch(`http://${context.req.headers.host}/api/projects`, { method: 'POST' })
	const projects = await projectsRes.json()


	return {
		props: { data, footer, projects },
	}
}

export default Projects
