import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
	children: ReactNode
}

const variants = {
	hidden: { opacity: 0, x: -200 },
	enter: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 700 },
}

const Layout = ({ children }: Props): JSX.Element => (
	<div>
		<motion.main
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: 'linear' }}
			className=""
		>
			{children}
		</motion.main>
	</div>
)

export default Layout