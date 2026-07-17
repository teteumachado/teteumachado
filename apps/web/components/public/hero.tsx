'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PhotosCarousel } from '@/components/public/photos-carousel'

export const Hero = () => {
  const t = useTranslations('hero')

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-3 mx-auto my-5">
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
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="text-sm"
      >
        {t('bio')}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="mt-6"
      >
        <PhotosCarousel />
      </motion.div>
    </div>
  )
}
