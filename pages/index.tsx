// Libraries
import type { NextPage } from 'next'
import Head from 'next/head'
// Components
import Nav from '../components/Nav'
import Hr from '../components/Hr'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import About from '../components/About'
import ProjectSection from "../components/ProjectSection"
import Footer from '../components/Footer'

const Home: NextPage = ({ data, about, skills, item, project, footer }: any) => {
	const navProps = { text: data.menu_text, first: data.first_name, last: data.last_name }

	return (
		<div>
			<Head>
				<title >Jakub Kapała</title>
				<meta name="description" content="Jakub Kapała - portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav props={navProps} />

			{/* Main section */}
			<main className="flex items-center justify-center px-10 md:gap-10 pt-60 md:pt-48">
				<div className="flex items-center justify-end">
					<img src={data.img_first} height="511px" width="304px" className="aspect-[304/511] md:h-[511px] h-300px" />
				</div>
				<div className="flex items-center justify-start">
					<img src={data.img_second} height="397px" width="491px" className="hidden md:block" />
				</div>
			</main>

			<Hr />

			{/* About us */}
			<About data={about} />

			<Hr flip={true} />

			{/* Skills */}
			<Skills data={skills} />

			<Hr />

			{/* Timeline */}
			<Timeline data={item} />

			<Hr flip={true} />

			{/* Projects */}

			<ProjectSection data={project} />

			<Footer data={footer} />
		</div>
	)
}

const fetchProjectsData = async (context: any) => {
	const req = { name: 'project-section' }
	const projectRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const project = await projectRes.json()

	const name = project.project.split('/')[2]

	req.name = `projects/${name}`
	const res = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	project.project = await res.json()

	return project
}

// Fetch data from API
export async function getServerSideProps(context: any) {
	const req = { name: "main" }

	const res = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const data = await res.json()

	req.name = 'about'
	const secondRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const about = await secondRes.json()

	req.name = 'skills'
	const skillsRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const skills = await skillsRes.json()

	req.name = 'timeline'
	const timelineRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const { item } = await timelineRes.json()

	const project = await fetchProjectsData(context)

	req.name = 'footer'
	const footerRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const footer = await footerRes.json()

	return {
		props: { data, about, skills, item, project, footer },
	}
}

export default Home
