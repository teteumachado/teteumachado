'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { Button, ButtonProps } from '@workspace/ui/components/button'

export const LanguageSwitcher = ({
  variant = 'ghost',
  className,
  ...props
}: Partial<ButtonProps>) => {
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
    <Button
      variant={variant}
      size="icon-lg"
      onClick={toggle}
      className={className}
      disabled={isPending}
      {...props}
    >
      <span className="text-xs font-mono">
        {locale === 'pt' ? 'EN' : 'PT'}
      </span>
    </Button>
  )
}
