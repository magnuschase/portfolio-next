// Libraries
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
// Components
import styles from '../styles/Contact.module.scss'
import Alert from '../components/Alert'
import Layout from '../components/Layout/Layout'
// Utils
import { checkField } from '../util/validator'
import { GraphQLClient } from 'graphql-request'
import { CONTACT_PAGE_QUERY } from '../util/queries/contactPage'

interface FormItem {
	label: string,
	placeholder: string
}
interface HygraphContactPage {
	links: { label: string, url: string }[],
	email: FormItem,
	phone: FormItem,
	message: FormItem,
	name: FormItem
}

interface ContactPagePayload extends HygraphContactPage {
	host: string
}

const Contact: NextPage<ContactPagePayload> = ({
	links,
	email,
	message,
	name,
	phone,
	host
}) => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [text, setText] = useState('')

	const [alertData, setAlertData] = useState({ message: '', status: false })
	const [visible, setVisible] = useState(false)

	const _handleSubmit = async () => {
		const nameResult = checkField('name', userName);
		const emailResult = checkField('mail', userEmail);
		const textResult = checkField('message', text);

		if (nameResult.status && emailResult.status && textResult.status) {
			const req = { text, name, email, phone }
			const res = await fetch(`http://${host}/api/send`, { method: 'POST', body: JSON.stringify(req) })
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
						{links.map((element: any) => (
							<motion.a
								whileHover={{ scale: 1.1, transition: { duration: 0.5, type: 'spring' } }}
								href={element.url} key={element.label} className={styles.link}>{element.label}</motion.a>
						))}
					</section>

					<div className={styles.hex_container}>
						<div className={`${styles.pentagon} ${styles.pentagon_1}`}></div>
						<div className={`${styles.pentagon} ${styles.pentagon_2}`}></div>
						<img src="/polygon-border.svg" className={styles.image} alt=''/>
					</div>
				</div>

				<motion.div initial={{ x: 1000, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}
					exit={{ x: 1000, opacity: 0, transition: { duration: 1 } }} className={styles.container_r}>

					<div className={styles.section_title}>Contact form</div>
					<div className="grid grid-cols-1 gap-6 w-full">
						<p className={styles.label}>{name.label}</p>
						<motion.input type="text" value={userName}
							placeholder={name.placeholder}
							onChange={e => setUserName(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="hidden grid-cols-2 gap-6 w-full sm:grid">
						<p className={styles.label}>{phone.label}</p>
						<p className={styles.label}>{email.label}</p>
						<motion.input type="text" value={userPhone}
							placeholder={phone.placeholder}
							onChange={e => setUserPhone(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
						<motion.input type="email" value={userEmail}
							placeholder={email.placeholder}
							onChange={e => setUserEmail(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 w-full sm:hidden">
						<p className={styles.label}>{phone.label}</p>
						<motion.input type="text" value={userPhone}
							placeholder={phone.placeholder}
							onChange={e => setUserPhone(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
						<p className={styles.label}>{email.label}</p>
						<motion.input type="email" value={userEmail}
							placeholder={email.placeholder}
							onChange={e => setUserEmail(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text}
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 w-full">
						<p className={styles.label}>{message.label}</p>
						<motion.textarea
							placeholder={message.placeholder} value={text} onChange={e => setText(e.target.value)}
							whileFocus={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }}
							className={styles.text} id="" cols={30} rows={5}></motion.textarea>
					</div>

					<div className="flex justify-end">
						<button onClick={() => _handleSubmit()} className={styles.link}>Submit</button>
					</div>
				</motion.div>
			</main>
			<Alert data={alertData} visible={visible} setVisible={setVisible} />
		</Layout>
	)
}

// Fetch data from API
export async function getServerSideProps(context: any) {
	if (!process.env.HYGRAPH_API_URL || !process.env.HYGRAPH_API_TOKEN) return { props: {} }

	const client = new GraphQLClient(
		process.env.HYGRAPH_API_URL,
		{
			headers: {
				Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`
			}
		}
	)

	const { contactPage } = await client.request(CONTACT_PAGE_QUERY) as { contactPage: HygraphContactPage }
	const { host } = context.req.headers

	return {
		props: { ...contactPage, host },
	}
}

export default Contact
