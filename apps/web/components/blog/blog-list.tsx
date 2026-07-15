'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import type { PostMeta } from '@/lib/blog'
import { PostCard } from '@/components/blog/post-card'
import { FeaturedPost } from '@/components/blog/featured-post'
import { TagBadge } from '@/components/blog/tag-badge'

interface Props {
  posts: PostMeta[]
  featured: PostMeta[]
  tags: string[]
}

export function BlogList({ posts, featured, tags: allTags }: Props) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'description', 'tags'],
        threshold: 0.3,
      }),
    [posts],
  )

  const filtered = useMemo(() => {
    let result = posts
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag))
    }
    if (search.trim()) {
      result = fuse.search(search).map((r) => r.item)
    }
    return result
  }, [search, activeTag, posts, fuse])

  const nonFeatured = posts.filter((p) => !p.featured)

  return (
    <div className="flex flex-col gap-4">
      <input
        type="search"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full text-sm px-3 py-2 rounded border bg-transparent focus:outline-none focus:border-primary/30 transition-colors"
      />

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() =>
                setActiveTag(activeTag === tag ? null : tag)
              }
            />
          ))}
        </div>
      )}

      {featured.length > 0 && !search && !activeTag && (
        <section>
          <FeaturedPost post={featured[0]!} />
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {(search || activeTag ? filtered : nonFeatured).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">
          No posts found.
        </p>
      )}
    </div>
  )
}
