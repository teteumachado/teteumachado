'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { projects } from '@workspace/transactional'
import Link from 'next/link'

export const Projects = () => {
  const t = useTranslations('projects')

  return (
    <section className="w-full py-8">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto mb-1">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex gap-2 items-center w-full"
        >
          <h1 className="font-serif font-bold shrink-0 text-muted-foreground">{t('title')}</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="h-px flex-1 bg-muted-foreground origin-left"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto flex flex-col gap-2">
        {projects.map((p, i) => (
          <Link key={i} href={p.url} target="_blank">
            <div className="w-full flex justify-between p-2 rounded items-center transition-colors border border-transparent hover:border hover:border-primary/30 hover:shadow-sm">
              <div className="flex flex-col gap-1">
                <h1 className="text-xs font-bold">{p.name}</h1>
                <h2 className="text-[0.7rem]">{p.shortDescription}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
