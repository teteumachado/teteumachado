import Link from 'next/link'
import { Header } from '@/components/public/header'

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto py-16 text-center">
        <h1 className="font-serif font-bold text-4xl text-muted-foreground mb-4">
          404
        </h1>
        <p className="text-sm text-muted-foreground mb-6">Page not found.</p>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Go back home →
        </Link>
      </main>
    </div>
  )
}
