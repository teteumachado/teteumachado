import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  featured: boolean
  readingTime: string
}

const articlesDir = path.join(
  process.cwd(),
  '..',
  '..',
  'packages',
  'transactional',
  'source',
  'articles',
)

function getPostMeta(slug: string): PostMeta | null {
  try {
    const filePath = path.join(articlesDir, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) return null
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(source)
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '',
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: readingTime(content).text,
    }
  } catch {
    return null
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(articlesDir)) return []
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.mdx'))
  const posts = files
    .map((f) => getPostMeta(f.replace(/\.mdx$/, '')))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  return Array.from(tags).sort()
}

export function getPost(slug: string): PostMeta | null {
  return getPostMeta(slug)
}
