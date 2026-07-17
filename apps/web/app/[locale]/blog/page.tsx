import { getAllPosts, getFeaturedPosts, getAllTags } from '@/lib/blog'
import { BlogList } from '@/components/blog/blog-list'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const siteT = await getTranslations('site')
  const blogT = await getTranslations('blog')
  return {
    title: `${blogT('title')} | ${siteT('title')}`,
    description: siteT('description'),
  }
}

export default async function BlogPage() {
  const locale = await getLocale()
  const posts = getAllPosts(locale)
  const featured = getFeaturedPosts(locale)
  const tags = getAllTags(locale)

  return <BlogList posts={posts} featured={featured} tags={tags} />
}
