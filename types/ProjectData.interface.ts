import HygraphImage from "./frontPage/HygraphImage"

export default interface ProjectData {
	title: string,
	technologies: string[],
	github: string,
	image: HygraphImage[],
	date: string,
	desc: string,
	content: { html: string }
}