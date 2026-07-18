import Link from 'next/link'
import { Header } from '@/components/public/header'

export default function LocaleNotFound() {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <main className="mx-auto w-full max-w-sm px-3 py-16 text-center md:max-w-md lg:max-w-lg">
        <h1 className="mb-4 font-serif text-4xl font-bold text-muted-foreground">
          404
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">Page not found.</p>
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Go back home →
        </Link>
      </main>
    </div>
  )
}
