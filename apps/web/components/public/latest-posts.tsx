'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

interface Props {
  posts: PostMeta[]
}

export const LatestPosts = ({ posts }: Props) => {
  return (
    <section className="w-full py-8">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto mb-1">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex gap-2 items-center w-full"
        >
          <h1 className="font-serif font-bold shrink-0 text-muted-foreground">Recent Posts</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="h-px flex-1 bg-muted-foreground origin-left"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto flex flex-col gap-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="w-full flex justify-between p-2 rounded items-center transition-colors border border-transparent hover:border hover:border-primary/30 hover:shadow-sm">
              <div className="flex flex-col gap-1 min-w-0">
                <h1 className="text-xs truncate font-bold">{post.title}</h1>
                <h2 className="text-[0.7rem] truncate">{post.description}</h2>
              </div>
            </div>
          </Link>
        ))}

        <Link
          href="/blog"
          className="text-[0.7rem] text-muted-foreground hover:text-foreground transition-colors text-center pt-1"
        >
          View all posts →
        </Link>
      </div>
    </section>
  )
}
