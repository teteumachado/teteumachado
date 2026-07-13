'use client'

import { motion } from 'framer-motion'
import { PhotosCarousel } from '@/components/public/photos-carousel'

export const Hero = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-3 mx-auto my-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex gap-2 items-center w-full"
      >
        <h1 className="font-serif font-bold shrink-0 text-muted-foreground">About me</h1>
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
        I&apos;m from Aracaju, Brazil, and I build products and tools from scratch — from the first commit to the first paying user. I&apos;d rather solve problems cheaply and efficiently than add complexity where it isn&apos;t needed. Right now I work with Next.js and Node, applying that to AI-powered products.
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
