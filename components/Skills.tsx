import parse from 'html-react-parser'
import styles from '../styles/Skills.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

type SkillsProps = {
	title: string,
	logo: Array<string>,
	post_content: string,
}

const Skills = (props: { data: SkillsProps }) => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-10 md:px-24 mb-12">
			<div className={`${styles.item_grid}`}>
				{props.data.logo.map(element => {
					return (
						<motion.div whileHover={{ y: '-5px', scale: 1.1 }} className={styles.item} key={element}>
							<div className={styles.image}></div>
							<img className={styles.logo} src={element} alt={element} />
						</motion.div>
					)
				})}
			</div>
			<AnimatePresence>
				<motion.div className="grid grid-cols-1" initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, type: "spring" }} >
					<h1 className="font-light md:font-thin text-3xl md:text-5xl text-kapala-shadow">{props.data.title}</h1>
					<div className={`font-lighter md:font-thin text-lg md:text-2xl ${styles.list}`}>{parse(props.data.post_content)}</div>
				</motion.div>
			</AnimatePresence>
		</section>

	)
}


export default Skills