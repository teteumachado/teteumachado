'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

interface Props {
  post: PostMeta
}

export function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="border rounded p-3 transition-colors hover:border-primary/30 hover:shadow-sm h-full flex flex-col gap-1"
      >
        <h3 className="text-sm font-medium">{post.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[0.6rem] text-muted-foreground">
          {post.readingTime}
        </span>
      </motion.article>
    </Link>
  )
}
