'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { PostMeta } from '@/lib/blog'

interface Props {
  posts: PostMeta[]
}

export const LatestPosts = ({ posts }: Props) => {
  const t = useTranslations('latestPosts')
  const blogT = useTranslations('blog')

  return (
    <section className="w-full py-8">
      <div className="mx-auto mb-1 w-full max-w-sm px-3 md:max-w-md lg:max-w-lg">
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
      </div>

      <div className="mx-auto flex w-full max-w-sm flex-col gap-2 px-3 md:max-w-md lg:max-w-lg">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="flex w-full items-center justify-between rounded border border-transparent p-2 transition-colors hover:border hover:border-primary/30 hover:shadow-sm">
              <div className="flex min-w-0 flex-col gap-1">
                <h1 className="truncate text-xs font-bold">{post.title}</h1>
                <h2 className="truncate text-[0.7rem]">{post.description}</h2>
              </div>
            </div>
          </Link>
        ))}

        <Link
          href="/blog"
          className="pt-1 text-center text-[0.7rem] text-muted-foreground transition-colors hover:text-foreground"
        >
          {blogT('viewAll')}
        </Link>
      </div>
    </section>
  )
}
