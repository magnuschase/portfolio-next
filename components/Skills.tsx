import styles from '../styles/Skills.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import SkillsSection from '../types/frontPage/SkillsSection.interface'

const Skills: React.FC<SkillsSection> = ({
	logos,
	title,
	categories
}) => {

	const renderTechList = (technologies: string[]) => {
		return technologies.map((name, index) => 
			<span key={name}>{name}{index !== technologies.length - 1  && ', '}</span>
		)
	}
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-10 md:px-24 mb-12">
			<div className={`${styles.item_grid}`}>
				{logos.map(({url}) => {
					return (
						<motion.div whileHover={{ y: '-5px', scale: 1.1 }} className={styles.item} key={url}>
							<div className={styles.image}></div>
							<img className={styles.logo} src={url} alt='' />
						</motion.div>
					)
				})}
			</div>
			<AnimatePresence>
				<motion.div className="grid grid-cols-1" initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, type: "spring" }} >
					<h1 className="font-light md:font-thin text-3xl md:text-5xl text-kapala-shadow">{title}</h1>
					<div className={`font-lighter md:font-thin text-lg md:text-2xl ${styles.list}`}>
						{
							categories.map(({name, technologies}) => (
								<li key={name}>
									<span className='font-normal'>{name}</span> - {renderTechList(technologies)}
								</li>
							))
						}
					</div>
				</motion.div>
			</AnimatePresence>
		</section>

	)
}


export default Skills