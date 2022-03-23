import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const filesDir = `${process.cwd()}/static`

export function getPostSlugs() {
	return fs.readdirSync(filesDir)
}

export function getPostBySlug(slug: string,) {
	const realSlug = slug.replace(/\.md$/, '')
	const fullPath = join(filesDir, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	return data
}

export function getAllPosts() {
	const slugs: Array<string> = getPostSlugs()
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
	return posts
}