// Libraries
import type { NextPage } from 'next'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { GraphQLClient } from 'graphql-request'
// Components
import Hr from '../components/Hr'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import About from '../components/About'
import ProjectSection from "../components/ProjectSection"
import Layout from '../components/Layout/Layout'
// Constants
import { FRONT_PAGE_QUERY } from '../util/queries/frontPage'
import FrontPagePayload from '../types/frontPage/FrontPagePayload.interface'

const Home: NextPage<FrontPagePayload> = ({
	aboutMe,
	academic,
	mainSectionImages,
	projectSection,
	workExperience,
	skills
}) => {

	return (
		<Layout>
			<Head>
				<title >Jakub Kapała</title>
				<meta name="description" content="Jakub Kapała - portfolio" />
			</Head>

			{/* Main section */}
			<AnimatePresence>
				<motion.main initial={{ x: 1000, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}
					exit={{ x: 1000, opacity: 0, transition: { duration: 1 } }} className="flex items-center justify-center px-10 md:gap-10 pt-60 md:pt-48">
					<motion.div whileHover={{ x: '12px', y: '-12px', scale: 1.05 }} className="flex items-center justify-end">
						<img src={mainSectionImages[0].url} height="511px" width="304px" className="aspect-[304/511] md:h-[511px] h-300px" alt=''/>
					</motion.div>
					<motion.div whileHover={{ x: '-12px', y: '12px', scale: 1.05 }} className="flex items-center justify-start">
						<img src={mainSectionImages[1].url} height="397px" width="491px" className="hidden md:block" alt='' />
					</motion.div>
				</motion.main>
			</AnimatePresence>

			<Hr />

			{/* About us */}
			<About {...aboutMe} />

			<Hr flip={true} />

			{/* Skills */}
			<Skills {...skills} />

			<Hr />

			{/* Timeline */}
			<Timeline data={workExperience} />

			<Hr flip={true} />

			{/* Projects */}

			<ProjectSection {...projectSection} />
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
	const { frontPage } = await client.request(FRONT_PAGE_QUERY) as { frontPage: FrontPagePayload }

	return {
		props: frontPage,
	}
}

export default Home
