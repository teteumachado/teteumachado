'use client'
import { motion } from 'framer-motion'
import { projects } from '@workspace/transactional'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card'
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area'
import Link from 'next/link'
import { Button } from '@workspace/ui/components/button'
import { IconExternalLink } from '@tabler/icons-react'

export const Projects = () => {
  return (
    <section className="w-full py-8">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto mb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex gap-2 items-center w-full"
        >
          <h1 className="font-serif font-bold shrink-0 text-muted-foreground">Projects</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="h-px flex-1 bg-muted-foreground origin-left"
          />
        </motion.div>
      </div>

      <ScrollArea>
        <div className="flex gap-3 px-3 pb-4">
          {projects.map(p => (
            <Card className="min-w-96 max-w-sm md:max-w-md lg:max-w-lg shrink-0" key={p.url}>
              <CardHeader>
                <CardTitle className="font-serif text-sm italic">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-xs">{p.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={p.url}>
                  <Button size="lg">
                    <IconExternalLink />
                    Ver mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
