'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Socials } from '@/components/socials'

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg justify-between p-3 mx-auto"
    >
      <Link href="/">
        <div className="flex flex-col">
          <h1 className="font-medium text-md">Matheus Machado</h1>
          <h2 className="text-muted-foreground text-xs">Technology Enthusiast</h2>
        </div>
      </Link>
      <div className="flex gap-2 items-center">
        <Socials />
        <ThemeSwitcher />
      </div>
    </motion.div>
  )
}
