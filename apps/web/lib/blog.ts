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

function articlesDir(locale: string) {
  return path.join(
    process.cwd(),
    '..',
    '..',
    'packages',
    'transactional',
    'source',
    'articles',
    locale,
  )
}

function getPostMeta(slug: string, locale: string): PostMeta | null {
  try {
    const dir = articlesDir(locale)
    const filePath = path.join(dir, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) return null
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(source)
    const rt = readingTime(content)
    const readingTimeText =
      locale === 'pt'
        ? `${Math.ceil(rt.minutes)} min de leitura`
        : rt.text
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '',
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: readingTimeText,
    }
  } catch {
    return null
  }
}

export function getAllPosts(locale: string = 'pt'): PostMeta[] {
  const dir = articlesDir(locale)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
  const posts = files
    .map((f) => getPostMeta(f.replace(/\.mdx$/, ''), locale))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getFeaturedPosts(locale: string = 'pt'): PostMeta[] {
  return getAllPosts(locale).filter((p) => p.featured)
}

export function getAllTags(locale: string = 'pt'): string[] {
  const tags = new Set<string>()
  for (const post of getAllPosts(locale)) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  return Array.from(tags).sort()
}

export function getPost(slug: string, locale: string = 'pt'): PostMeta | null {
  return getPostMeta(slug, locale)
}
