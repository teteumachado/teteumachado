import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@workspace/ui'],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'frontmatter' }],
      'remark-gfm',
    ],
    rehypePlugins: ['rehype-slug', 'rehype-autolink-headings'],
  },
})

export default withMDX(nextConfig)
