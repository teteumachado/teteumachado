'use client'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Socials } from '@/components/socials'

export const Header = () => {
  return (
    <div className="flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg justify-between p-3 mx-auto">
      <div className="flex flex-col">
        <h1 className="font-medium text-md">Matheus Machado</h1>
        <h2 className="text-muted-foreground text-xs">Indie Hacker / Builder</h2>
      </div>
      <div className="flex gap-2 items-center">
        <Socials />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
