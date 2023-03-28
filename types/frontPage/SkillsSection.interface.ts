import HygraphImage from "./HygraphImage"

export default interface SkillsSection {
	logos: HygraphImage[],
	title: string,
	categories: { technologies: string[], name: string}[]
}