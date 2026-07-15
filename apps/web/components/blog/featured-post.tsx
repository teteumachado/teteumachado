import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

interface Props {
  post: PostMeta
}

export function FeaturedPost({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="border rounded p-4 transition-colors hover:border-primary/30 hover:shadow-sm">
        <span className="text-[0.6rem] uppercase tracking-wider text-muted-foreground font-medium">
          Featured
        </span>
        <h2 className="text-base font-medium mt-1">{post.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[0.6rem] text-muted-foreground block mt-1">
          {post.readingTime}
        </span>
      </article>
    </Link>
  )
}
