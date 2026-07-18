import { Hero } from '@/components/public/hero'
import { Projects } from '@/components/public/projects'
import { LatestPosts } from '@/components/public/latest-posts'
import { getAllPosts } from '@/lib/blog'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('site')
  return {
    title: `${t('title')} | ${t('subtitle')}`,
    description: t('description'),
  }
}

export default async function Page() {
  const locale = await getLocale()
  const posts = getAllPosts(locale).slice(0, 5)

  return (
    <>
      <Hero />
      <Projects />
      <LatestPosts posts={posts} />
    </>
  )
}
