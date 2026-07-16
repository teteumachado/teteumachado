import { Hero } from '@/components/public/hero';
import { Projects } from '@/components/public/projects';
import { LatestPosts } from '@/components/public/latest-posts';
import { getAllPosts } from '@/lib/blog';

export default function Page() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <Hero />
      <Projects />
      <LatestPosts posts={posts} />
    </>
  )
}
