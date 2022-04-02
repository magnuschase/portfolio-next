import styles from '../styles/Timeline.module.scss'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
type Item = {
	abbr: string,
	desc: string,
	end_date: string,
	start_date: string,
	title: string
}

const Timeline = (props: { data: Array<Item> }) => {
	const [active, setActive] = useState(0)

	return (
		<section className={styles.timeline}>
			<AnimatePresence>
				<motion.div initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, type: 'spring', delay: 0.3 }} className="grid grid-cols-2">
					{props.data.map((element: Item, index: number) => {
						if (index % 2 == 0) return (
							<React.Fragment key={element.abbr}>
								<div className="flex justify-center items-center relative pl-12" key={element.abbr}>
									<div className="border-t-4 border-kapala-700 absolute right-0 w-[45%]"></div>
									<div className={styles.text_left}>{element.start_date} <span className="hidden sm:inline-block">-</span> {element.end_date}</div>
									<motion.div whileHover={{ scale: 0.9 }} className={`${styles.polygon} ${active == index ? styles.active : ''}`} onClick={() => setActive(index)}>{element.abbr}</motion.div>
								</div>
								<div className="h-32 border-l-4 border-kapala-700"></div>
							</React.Fragment>
						)
						else return (
							<React.Fragment key={element.abbr}>
								<div className="h-32 border-kapala-700"></div>
								<div className="flex justify-center items-center relative border-l-4 border-kapala-700 pr-12" key={element.abbr}>
									<div className="border-t-4 border-kapala-700 absolute left-0 w-[45%]"></div>
									<div className="text-kapala-20 font-thin text-sm sm:text-base absolute left-[55%]">{element.start_date} <span className="hidden sm:inline-block">-</span> {element.end_date}</div>
									<motion.div whileHover={{ scale: 0.9 }} className={`${styles.polygon} ${active == index ? styles.active : ''}`} onClick={() => setActive(index)}>{element.abbr}</motion.div>
								</div>
							</React.Fragment>
						)
					})}
				</motion.div >
			</AnimatePresence>

			<AnimatePresence>
				<motion.div initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, type: 'spring' }} className={styles.item}>
					<div className={styles.title}>{props.data[active].title}</div>
					<div className={styles.container}>
						<div className="border-t-4 border-kapala-700 pt-4 text-kapala-20 font-thin">
							{props.data[active].desc}
						</div>
						<div className={styles.hex_container}>
							<motion.div whileHover={{ x: '12px', y: '-12px' }} className={`${styles.pentagon} ${styles.pentagon_1}`}></motion.div>
							<motion.div whileHover={{ x: '-12px', y: '-12px' }} className={`${styles.pentagon} ${styles.pentagon_2}`}></motion.div>
							<motion.img whileHover={{ x: '-6px', y: '12px' }} src="/polygon-border.svg" className={styles.image} />
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	)
}


export default Timeline