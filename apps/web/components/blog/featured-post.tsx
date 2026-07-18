'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { PostMeta } from '@/lib/blog'

interface Props {
  post: PostMeta
}

export function FeaturedPost({ post }: Props) {
  const t = useTranslations('blog')

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="border p-4 transition-colors hover:border-primary/30 hover:shadow-sm">
        <span className="text-[0.6rem] font-medium tracking-wider text-muted-foreground uppercase">
          {t('featured')}
        </span>
        <h2 className="mt-1 text-base font-medium">{post.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted px-1.5 py-0.5 text-[0.6rem] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-1 block text-[0.6rem] text-muted-foreground">
          {post.readingTime}
        </span>
      </article>
    </Link>
  )
}
