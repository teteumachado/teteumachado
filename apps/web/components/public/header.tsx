'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Socials } from '@/components/socials'
import { LanguageSwitcher } from '@/components/language-switcher'

export const Header = () => {
  const t = useTranslations()

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto flex w-full max-w-sm items-center justify-between p-3 md:max-w-md lg:max-w-lg"
    >
      <Link href="/">
        <div className="flex flex-col">
          <h1 className="text-md font-medium">{t('site.title')}</h1>
          <h2 className="text-xs text-muted-foreground">
            {t('site.subtitle')}
          </h2>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <Socials />
        <ThemeSwitcher />
      </div>
    </motion.div>
  )
}
