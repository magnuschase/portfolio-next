import parse from 'html-react-parser'
import styles from '../styles/Skills.module.scss'

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
						<div className={styles.item} key={element}>
							<div className={styles.image}></div>
							<img className={styles.logo} src={element} alt={element} />
						</div>
					)
				})}
			</div>
			<div className="grid grid-cols-1">
				<h1 className="font-light md:font-thin text-3xl md:text-5xl">{props.data.title}</h1>
				<div className={`font-lighter md:font-thin text-lg md:text-2xl ${styles.list}`}>{parse(props.data.post_content)}</div>
			</div>
		</section>
	)
}


export default Skills