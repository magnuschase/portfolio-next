type FooterProps = {
	text: string,
	mail: string,
	button: string,
	post_content?: string,
}

const Footer = (props: { data: any }) => {
	return (
		<div className="w-screen py-4 px-10 border-t border-kapala-400 text-kapala-400 font-thin mt-12 flex justify-between">
			<a href={`mailto:${props.data.mail}`}>{props.data.text} <span className="font-medium">{props.data.mail}</span></a>
			<a href="#">{props.data.button}</a>
		</div>
	)
}

export default Footer