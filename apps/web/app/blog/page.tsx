import { getAllPosts, getFeaturedPosts, getAllTags } from '@/lib/blog'
import { BlogList } from '@/components/blog/blog-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Matheus Machado',
  description: 'Thoughts on building products, coding, and indie hacking.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = getFeaturedPosts()
  const tags = getAllTags()

  return <BlogList posts={posts} featured={featured} tags={tags} />
}
