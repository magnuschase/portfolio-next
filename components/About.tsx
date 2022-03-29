import styles from '../styles/About.module.scss'
import parse from 'html-react-parser'

function About(props: { data: any }) {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-10 md:px-24 mb-12">
			<div className="grid grid-cols-1 gap-y-6 md:gap-y-12 px-0 xl:px-24">
				<h1 className="font-light md:font-thin text-3xl md:text-5xl text-kapala-shadow">{props.data.title}</h1>
				<div className="font-light md:font-thin text-lg md:text-2xl">{parse(props.data.post_content)}</div>
				<a href={`mailto:${props.data.mail}`} className="italic text-xl">{props.data.footer}<span className="font-medium not-italic">{props.data.mail}</span></a>
			</div>
			<div className="grid grid-cols-1">
				<div className={styles.hex_container}>
					<div className={`${styles.pentagon} absolute left-0 -bottom-12 bg-kapala-700`}></div>
					<div className={`${styles.pentagon} absolute left-8 bottom-0 bg-kapala-400`}></div>
					<img src="/polygon-border.svg" className={`absolute left-16 bottom-12 w-[280px] aspect-square`} />
					<div className={`${styles.pentagon} block lg:hidden absolute left-16 bottom-12 bg-kapala-300`}></div>
				</div>
			</div>
		</section>
	)
}

export default About