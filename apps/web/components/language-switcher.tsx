'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const toggle = () => {
    const next = locale === 'pt' ? 'en' : 'pt'
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
