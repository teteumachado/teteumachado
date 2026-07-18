import { IconBrandInstagramFilled, IconBrandX } from '@tabler/icons-react'
import { Button } from '@workspace/ui/components/button'
import Link from 'next/link'

const socials = [
  {
    url: 'https://instagram.com/mmatheusmachado',
    icon: <IconBrandInstagramFilled />,
  },
  {
    url: 'https://x.com/teteurocha28',
    icon: <IconBrandX />,
  },
]

export const Socials = () => {
  return (
    <div className="flex items-center gap-2">
      {socials.map((s) => (
        <Link href={s.url} key={s.url}>
          <Button
            size="icon-lg"
            variant="ghost"
            className="transition-transform hover:scale-110 active:scale-95"
          >
            {s.icon}
          </Button>
        </Link>
      ))}
    </div>
  )
}
