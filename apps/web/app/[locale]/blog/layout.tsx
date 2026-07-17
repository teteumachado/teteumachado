import { Header } from '@/components/public/header'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="w-full max-w-sm md:max-w-md lg:max-w-lg px-3 mx-auto py-8">
        {children}
      </main>
    </div>
  )
}
