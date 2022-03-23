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

export function getPostSlugs() {
	return fs.readdirSync(filesDir)
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
	const slugs: Array<string> = getPostSlugs()
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
	return posts
}