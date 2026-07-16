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

  return (
    <>
      <h1 className="font-serif font-bold text-muted-foreground mb-6">Blog</h1>
      <BlogList posts={posts} featured={featured} tags={tags} />
    </>
  )
}
