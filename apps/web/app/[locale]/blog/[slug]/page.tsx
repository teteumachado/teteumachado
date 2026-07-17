import { notFound } from 'next/navigation'
import { getAllPosts, getPost } from '@/lib/blog'
import Script from 'next/script'
import type { Metadata } from 'next'
import { mdxModules as ptMdx } from '@workspace/transactional/articles/pt'
import { mdxModules as enMdx } from '@workspace/transactional/articles/en'

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const ptPosts = getAllPosts('pt')
  const enPosts = getAllPosts('en')
  return [
    ...ptPosts.map((post) => ({ slug: post.slug, locale: 'pt' })),
    ...enPosts.map((post) => ({ slug: post.slug, locale: 'en' })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPost(slug, locale)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params
  const post = getPost(slug, locale)
  if (!post) notFound()

  const modules = locale === 'en' ? enMdx : ptMdx
  const Content = (modules as Record<string, any>)[slug]
  if (!Content) notFound()

  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Matheus Machado',
            },
          }),
        }}
      />
      <article className="blog-post">
        <Content />
      </article>
    </>
  )
}
