import { Hero } from '@/components/public/hero';
import { Projects } from '@/components/public/projects';
import { LatestPosts } from '@/components/public/latest-posts';
import { getAllPosts } from '@/lib/blog';
import { getLocale } from 'next-intl/server';

export default async function Page() {
  const locale = await getLocale()
  const posts = getAllPosts(locale).slice(0, 5);

  return (
    <>
      <Hero />
      <Projects />
      <LatestPosts posts={posts} />
    </>
  )
}
