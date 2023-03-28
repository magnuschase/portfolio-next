import HygraphImage from "./HygraphImage.interface"

export default interface SkillsSection {
	logos: HygraphImage[],
	title: string,
	categories: { technologies: string[], name: string}[]
}