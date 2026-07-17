import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matheusmachado.xyz'
  const locales = ['pt', 'en'] as const

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const posts = getAllPosts(locale)

    const prefix = locale === 'pt' ? '' : '/en'

    entries.push({
      url: `${baseUrl}${prefix}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'pt' ? 1 : 0.9,
      alternates: {
        languages: {
          pt: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/`,
        },
      },
    })

    entries.push({
      url: `${baseUrl}${prefix}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/blog`,
        },
      },
    })

    for (const post of posts) {
      entries.push({
        url: `${baseUrl}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: {
            pt: `${baseUrl}/blog/${post.slug}`,
            en: `${baseUrl}/en/blog/${post.slug}`,
            'x-default': `${baseUrl}/blog/${post.slug}`,
          },
        },
      })
    }
  }

  return entries
}
