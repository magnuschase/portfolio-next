import { AnimatePresence, motion } from 'framer-motion'
import parse from 'html-react-parser'

import styles from '../styles/Project.module.scss'
import Slider from './Slider'

type ProjectProps = {
	date: string,
	desc: string,
	gallery: Array<string>,
	post_content: string,
	technologies: Array<string>
	title: string,
	github?: string,
}

const Project = (props: { data: ProjectProps, visible: boolean, setVisible: Function }) => {
	const date = new Date(props.data.date).getFullYear()

	return (
		<AnimatePresence>
			{props.visible && (
				<motion.div
					key="modal"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1, transition: { duration: 1.125 } }}
					exit={{ scale: 0, opacity: 0, transition: { duration: 1.125 } }}
					className={styles.modal}
				>
					<div className={styles.container}>
						<motion.button className={styles.close} onClick={() => props.setVisible(!props.visible)}>
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 24 24"
								fill="currentColor"
								whileHover={{ scale: 0.8, transition: { duration: 2 } }}>
								<path d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z" />
							</motion.svg>
						</motion.button>
						<Slider data={props.data.gallery} />
						<div className={styles.data}>
							<div className={styles.title}>{props.data.title}</div>
							<div className="flex flex-row flex-wrap">
								<div className={styles.year}>{date}</div>
								{
									props.data.github != undefined && (
										<a href={props.data.github} className={styles.github}>GitHub</a>
									)
								}
							</div>
							<div className={styles.tags}>
								{props.data.technologies.map(element => <div key={element} className={styles.tag}>{element}</div>)}
							</div>
							<div className={styles.content}>
								{parse(props.data.post_content)}
							</div>
						</div>
					</div>

				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Project