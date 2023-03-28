import styles from '../styles/About.module.scss'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AboutMe from '../types/frontPage/AboutMe.interface'

const About: React.FC<AboutMe> = ({
	title,
	content
}) => {

	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-10 md:px-24 mb-12">
			<AnimatePresence>
				<motion.div initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, type: "spring", delay: .3 }} className="grid grid-cols-1 gap-y-6 md:gap-y-12 px-0 xl:px-24">
					<h1 className="font-light md:font-thin text-3xl md:text-5xl text-kapala-shadow">{title}</h1>
					<motion.div
						className="font-light md:font-thin text-lg md:text-2xl"
					>
						{content.text}
					</motion.div>
					<a href={`mailto:jakub@kapala.xyz`} className="italic text-xl">Feel free to hit me up - <span className="font-medium not-italic">jakub@kapala.xyz</span></a>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence>
				<motion.div initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="grid grid-cols-1">
					<div className={styles.hex_container}>
						<motion.div whileHover={{ x: '12px', y: '-12px' }} className={`${styles.pentagon} absolute left-0 -bottom-12 bg-kapala-700`}></motion.div>
						<motion.div whileHover={{ x: '12px', y: '-12px' }} className={`${styles.pentagon} absolute left-8 bottom-0 bg-kapala-400`}></motion.div>
						<motion.img whileHover={{ x: '12px', y: '-12px' }} src="/polygon-border.svg" className={`absolute left-16 bottom-12 w-[280px] aspect-square`} />
						<div className={`${styles.pentagon} block lg:hidden absolute left-16 bottom-12 bg-kapala-300`}></div>
					</div>
				</motion.div>
			</AnimatePresence>

		</section>
	)
}

export default About