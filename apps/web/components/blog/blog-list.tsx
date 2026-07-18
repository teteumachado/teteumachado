'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('blog')

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'description', 'tags'],
        threshold: 0.3,
      }),
    [posts]
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex w-full items-center gap-2"
      >
        <h1 className="shrink-0 font-serif font-bold text-muted-foreground">
          {t('title')}
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="h-px flex-1 origin-left bg-muted-foreground"
        />
      </motion.div>

      <input
        type="search"
        placeholder={t('search')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border bg-transparent px-3 py-2 text-sm transition-colors focus:border-primary/30 focus:outline-none"
      />
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </div>
      )}

      {featured.length > 0 && !search && !activeTag && (
        <section className="flex flex-col gap-3">
          {featured.map((post) => (
            <FeaturedPost key={post.slug} post={post} />
          ))}
        </section>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {(search || activeTag ? filtered : nonFeatured).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          {t('noPosts')}
        </p>
      )}
    </div>
  )
}
