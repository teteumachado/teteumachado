import { getAllPosts, getFeaturedPosts, getAllTags } from '@/lib/blog'
import { BlogList } from '@/components/blog/blog-list'
import { getLocale } from 'next-intl/server'

export default async function BlogPage() {
  const locale = await getLocale()
  const posts = getAllPosts(locale)
  const featured = getFeaturedPosts(locale)
  const tags = getAllTags(locale)

  return <BlogList posts={posts} featured={featured} tags={tags} />
}
