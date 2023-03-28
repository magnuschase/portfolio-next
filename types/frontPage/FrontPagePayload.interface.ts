import Experience from "./Experience.interface"
import AboutMe from './AboutMe.interface'
import HygraphImage from "./HygraphImage.interface"
import ProjectSection from "./ProjectSection.interface"
import SkillsSection from "./SkillsSection.interface"

export default interface FrontPagePayload {
	aboutMe: AboutMe,
	academic: Experience[],
	mainSectionImages: HygraphImage[],
	projectSection: ProjectSection,
	workExperience: Experience[],
	skills: SkillsSection
}