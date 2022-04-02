import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const filesDir = `${process.cwd()}/static`

export const getHtml = async (md: string) => {
	const res = await remark().use(html).process(md)
	return res.value
}

export function getPostSlugs(dir: string = filesDir) {
	return fs.readdirSync(dir)
}

export async function getPostBySlug(slug: string, extended: boolean = false) {
	const realSlug = slug.replace(/\.md$/, '')
	const fullPath = join(filesDir, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)
	if (extended) return { ...data, post_content: await getHtml(content) }
	return data
}

export function getAllPosts() {
	const slugs: Array<string> = getPostSlugs(filesDir)
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
	return posts
}

export async function getAllProjects() {
	const slugs: Array<string> = getPostSlugs(`${filesDir}/projects`)
	const posts: Array<any> = []

	slugs.forEach(async (element, index) => {
		const realSlug = element.replace(/\.md$/, '')
		const fullPath = `${filesDir}/projects/${realSlug}.md`
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const { data, content } = matter(fileContents)
		const post_content = await remark().use(html).process(content)
		posts.push({ ...data, post_content: post_content.value })
		if (index == slugs.length - 1) {
			return posts
		}
	})

	return posts
}
