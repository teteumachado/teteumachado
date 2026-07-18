import { Header } from '@/components/public/header'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <main className="mx-auto w-full max-w-sm px-3 py-8 md:max-w-md lg:max-w-lg">
        {children}
      </main>
    </div>
  )
}
