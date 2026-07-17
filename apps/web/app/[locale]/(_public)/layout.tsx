import { Header } from '@/components/public/header'

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      {children}
    </div>
  )
}

export default PublicLayout
