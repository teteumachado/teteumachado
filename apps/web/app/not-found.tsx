import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <main className="text-center">
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
