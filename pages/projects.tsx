// Libraries
import type { NextPage } from 'next'
import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import { motion } from 'framer-motion'
// Components
import styles from '../styles/Projects.page.module.scss'
import ProjectItem from '../components/ProjectItem'
import Layout from '../components/Layout/Layout'
import { GET_PROJECTS_QUERY } from '../util/queries/getProjects'
import ProjectData from '../types/ProjectData.interface'

interface ProjectPagePayload {
	projects: ProjectData[]
}

const Projects: NextPage<ProjectPagePayload> = ({ projects }) => {

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
					{projects.map((element) => <ProjectItem key={element.title} data={element} />)}
				</motion.div>
			</main>
		</Layout>
	)
}

// Fetch data from API
export async function getServerSideProps(context: any) {
	if (!process.env.HYGRAPH_API_URL || !process.env.HYGRAPH_API_TOKEN) return { props: {} }

	const client = new GraphQLClient(
		process.env.HYGRAPH_API_URL,
		{
			headers: {
				Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`
			}
		}
	)
	const props = await client.request(GET_PROJECTS_QUERY) as { projects: ProjectData[] }

	return {
		props
	}
}

export default Projects
