import { Header } from '@/components/public/header'

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      {children}
    </div>
  )
}

export default PublicLayout
