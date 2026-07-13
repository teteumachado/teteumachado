'use client'

import { useTheme } from 'next-themes'
import { Button, type ButtonProps } from '@workspace/ui/components/button'
import { IconMoonFilled, IconSunHigh } from '@tabler/icons-react'

export const ThemeSwitcher = ({
  variant = 'ghost',
  size = 'icon-lg',
  className,
  ...props
}: Partial<ButtonProps>) => {
  const { theme, setTheme } = useTheme()

  const handleSetTheme = () => {
    setTheme(theme == 'light' && 'dark' || 'light')
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => handleSetTheme()}
      {...props}
    >
      {theme == 'light' && (
        <IconSunHigh />
      ) || (
        <IconMoonFilled />
      )}
    </Button>
  )
}
