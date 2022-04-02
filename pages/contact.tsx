// Libraries
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
// Components
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.scss'
import Alert from '../components/Alert'
// Utils
import { checkField } from '../util/validator'
import Layout from '../components/Layout/Layout'

const Contact: NextPage = ({ data, footer, contact, host }: any) => {
	const navProps = { text: data.menu_text, first: data.first_name, last: data.last_name }
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')

	const [alertData, setAlertData] = useState({ message: '', status: false })
	const [visible, setVisible] = useState(false)

	const _handleSubmit = async () => {
		const nameResult = checkField('name', name);
		const emailResult = checkField('mail', email);
		const textResult = checkField('message', text);

		if (nameResult.status && emailResult.status && textResult.status) {
			const req = { text, name, email, phone }
			const res = await fetch(`http://${host.name}/api/send`, { method: 'POST', body: JSON.stringify(req) })
			const data = await res.text()

			if (data.startsWith('2')) {
				const result = {
					message: 'Message was send',
					status: true,
				}
				setAlertData(result)
			} else {
				const result = {
					message: 'Error occured. Please try again later',
					status: false,
				}
				setAlertData(result)
			}
		} else {
			const result = {
				message: 'Please make sure you entered your e-mail, name, and message',
				status: false,
			}
			setAlertData(result)
		}
		setVisible(true)
	}

	return (
		<Layout>
			<Head>
				<title >Contact</title>
				<meta name="description" content="Jakub Kapała - kontakt" />
			</Head>

			<main className={styles.main}>
				<div className="flex flex-col gap-8">
					<div className={styles.section_title}>Links</div>

					<section className={styles.links}>
						{contact.links.map((element: any) => (
							<motion.a
								whileHover={{ scale: 1.1, transition: { duration: 1, delay: 0.25 } }}
								href={element.url} key={element.label} className={styles.link}>{element.label}</motion.a>
						))}
					</section>

					<div className={styles.hex_container}>
						<div className={`${styles.pentagon} ${styles.pentagon_1}`}></div>
						<div className={`${styles.pentagon} ${styles.pentagon_2}`}></div>
						<img src="/polygon-border.svg" className={styles.image} />
					</div>
				</div>

				<div className={styles.container_r}>

					<div className={styles.section_title}>Contact form</div>
					<div className="grid grid-cols-1 gap-6 w-full">
						<p className={styles.label}>{contact.name_label}</p>
						<motion.input type="text" value={name}
							placeholder={contact.name_placeholder}
							onChange={e => setName(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="hidden grid-cols-2 gap-6 w-full sm:grid">
						<p className={styles.label}>{contact.phone_label}</p>
						<p className={styles.label}>{contact.email_label}</p>
						<motion.input type="text" value={phone}
							placeholder={contact.phone_placeholder}
							onChange={e => setPhone(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
						<motion.input type="email" value={email}
							placeholder={contact.email_placeholder}
							onChange={e => setEmail(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 w-full sm:hidden">
						<p className={styles.label}>{contact.phone_label}</p>
						<motion.input type="text" value={phone}
							placeholder={contact.phone_placeholder}
							onChange={e => setPhone(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
						<p className={styles.label}>{contact.email_label}</p>
						<motion.input type="email" value={email}
							placeholder={contact.email_placeholder}
							onChange={e => setEmail(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 w-full">
						<p className={styles.label}>{contact.message_label}</p>
						<motion.textarea
							placeholder={contact.message_placeholder} value={text} onChange={e => setText(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text} id="" cols={30} rows={5}></motion.textarea>
					</div>

					<div className="flex justify-end">
						<button onClick={() => _handleSubmit()} className={styles.link}>Submit</button>
					</div>
				</div>
			</main>
			<Alert data={alertData} visible={visible} setVisible={setVisible} />
		</Layout>
	)
}

// Fetch data from API
export async function getServerSideProps(context: any) {
	const req = { name: "main" }

	const res = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const data = await res.json()

	req.name = 'footer'
	const footerRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const footer = await footerRes.json()

	req.name = 'contact'
	const contactRes = await fetch(`http://${context.req.headers.host}/api/single`, { method: 'POST', body: JSON.stringify(req) })
	const contact = await contactRes.json()

	const host = { name: context.req.headers.host }

	return {
		props: { data, footer, contact, host },
	}
}

export default Contact
