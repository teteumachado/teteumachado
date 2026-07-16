import { Hero } from '@/components/public/hero';
import { Projects } from '@/components/public/projects';
import { LatestPosts } from '@/components/public/latest-posts';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matheus Machado | Technology Enthusiast',
  description:
    'Personal portfolio of Matheus Machado — indie hacker building products with TypeScript, React, and Bayesian inference.',
};

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
