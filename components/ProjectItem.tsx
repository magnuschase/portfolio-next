import { motion } from 'framer-motion'
import Project from "./Project"
import styles from '../styles/Projects.page.module.scss'
import { useState } from 'react'

type ProjectProps = {
	date: string,
	desc: string,
	gallery: Array<string>,
	post_content: string,
	technologies: Array<string>
	title: string,
	github: string
}

const ProjectItem = (props: { data: ProjectProps }) => {
	const [visible, setVisible] = useState(false)

	return (
		<>
			<motion.div className={styles.featured} whileHover={{
				scale: 1.05,
				transition: { duration: 0.5 },
			}} onClick={() => setVisible(!visible)}>
				<div className="flex flex-col">
					<div className="text-kapala-shadow opacity-80 text-2xl font-medium pb-4 border-b-4 border-b-kapala-700/30">{props.data.title}</div>
					<div className="pt-4 text-kapala-20 font-thin mb-8">{props.data.desc}</div>
					<button className={styles.button}>
						<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" /></svg>
					</button>
				</div>
				<img src={props.data.gallery[0]} />
			</motion.div>
			<Project data={props.data} visible={visible} setVisible={setVisible} />
		</>
	)
}

export default ProjectItem