import styles from '../styles/ProjectSection.module.scss'
import { motion, AnimatePresence } from "framer-motion";
import Project from './Project'
import { useState } from 'react'
import Link from 'next/link'

type SectionProps = {
	post_content?: string,
	features: string,
	text: string,
	title: string,
	project: {
		date: string,
		desc: string,
		gallery: Array<string>,
		post_content: string,
		technologies: Array<string>
		title: string
	}
}

const colors = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']

const ProjectSection = (props: { data: SectionProps }) => {
	const [visible, setVisible] = useState(false)

	return (
		<div className={styles.container}>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, type: 'spring' }}
					className={styles.projects}>
					<div className={`${styles.title} mb-8`}>{props.data.title}</div>
					<div className="grid grid-cols-1 gap-2">
						{colors.map((element, i) => (
							<Link key={element} href="/projects">
								<motion.div
									key={element}
									className={`${styles[element]} ${styles.link} ${i % 2 == 0 ? '' : 'pl-10'} text-5xl select-none cursor-pointer`}
									whileHover={{
										opacity: 0.65, x: '12px', transition: { duration: 0.5 },
									}}>
									{props.data.text}
								</motion.div>
							</Link>

						))}
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence>
				<motion.div className={styles.featured}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.5 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, type: 'spring', delay: 0.3 }} onClick={() => setVisible(!visible)}>
					<div className="flex flex-col">
						<div className={`${styles.title} text-kapala-shadow mb-8`}>{props.data.features}</div>
						<div className="text-kapala-shadow opacity-80 text-2xl font-medium pb-4 border-b-4 border-b-kapala-700/30">{props.data.project.title}</div>
						<div className="pt-4 text-kapala-20 font-thin mb-8">{props.data.project.desc}</div>
						<button className={styles.button}>
							<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" /></svg>
						</button>
					</div>
					<img src={props.data.project.gallery[0]} />
				</motion.div>
			</AnimatePresence>

			<Project data={props.data.project} visible={visible} setVisible={setVisible} />
		</div>
	)
}

export default ProjectSection