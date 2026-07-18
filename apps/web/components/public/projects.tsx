'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { projects } from '@workspace/transactional'
import Link from 'next/link'

export const Projects = () => {
  const t = useTranslations('projects')

  return (
    <section className="w-full py-8">
      <div className="mx-auto mb-1 w-full max-w-sm px-3 md:max-w-md lg:max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex w-full items-center gap-2"
        >
          <h1 className="shrink-0 font-serif font-bold text-muted-foreground">
            {t('title')}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="h-px flex-1 origin-left bg-muted-foreground"
          />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="mx-auto flex w-full max-w-sm flex-col gap-2 px-3 md:max-w-md lg:max-w-lg"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
          >
            <Link href={p.url} target="_blank">
              <div className="flex w-full items-center justify-between rounded border border-transparent p-2 transition-colors hover:border hover:border-primary/30 hover:shadow-sm">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-bold">{p.name}</h1>
                  <h2 className="text-[0.7rem]">{p.shortDescription}</h2>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
