import ProjectData from '../ProjectData.interface'

export default interface ProjectSection {
	title: string,
	featuredText: string,
	buttonText: string,
	project: ProjectData
}