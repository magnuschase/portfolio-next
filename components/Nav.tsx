import React from 'react';
import styles from '../styles/Navbar.module.scss'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import sidebarStyles from "../styles/Sidebar.module.scss"
import Link from 'next/link';

const links = [
	{ name: "Home", to: "/", id: 1 },
	{ name: "Projects", to: "/projects", id: 2 },
	{ name: "Contact", to: "/contact", id: 3 },
];

const itemVariants = {
	closed: {
		opacity: 0
	},
	open: { opacity: 1 }
};

const sideVariants = {
	closed: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1
		}
	},
	open: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: 1
		}
	}
};

const Nav: React.FC = () => {
	const [open, cycleOpen] = useCycle(false, true)

	return (
		<>
			<header className={styles.nav}>
				<div className={styles.nav__buttons}>
					<motion.button whileHover={{ scale: 1.125, y: '12px' }} className={styles.nav__buttonxl} onClick={() => cycleOpen()}>menu</motion.button>
				</div>
				<Link href="/" passHref>
					<motion.div whileHover={{ scale: 1.2, y: '12px' }} className={styles.nav__names}>
						<h3>{`{jakub}`}</h3>
						<h3>{`{kapala}`}</h3>
					</motion.div>
				</Link>
			</header >
			<AnimatePresence>
				{open && (
					<motion.aside
						initial={{ width: 0 }}
						animate={{
							width: 300
						}}
						exit={{
							width: 0,
							transition: { delay: 0.5, duration: 0.5 }
						}}
						className={sidebarStyles.sidebar}
					>
						<motion.div
							className={sidebarStyles.container}
							initial="closed"
							animate="open"
							exit="closed"
							variants={sideVariants}
						>
							<motion.button onClick={() => cycleOpen()} className={sidebarStyles.close} whileHover={{ scale: 1.1 }} variants={itemVariants}>X</motion.button>

							{links.map(({ name, to, id }) => (
								<motion.div key={id}
									whileHover={{ scale: 1.1 }}
									variants={itemVariants}>
									<Link href={to}>{name}</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	)
}

export default Nav