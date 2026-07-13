import { PhotosCarousel } from '@/components/public/photos-carousel'

export const Hero = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-3 mx-auto my-5">
      <div className="flex gap-2 items-center w-full">
        <h1 className="font-serif font-bold shrink-0">About me</h1>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-sm text-muted-foreground">
        I&apos;m from Aracaju, Brazil, and I build products and tools from scratch — from the first commit to the first paying user. I&apos;d rather solve problems cheaply and efficiently than add complexity where it isn&apos;t needed. Right now I work with Next.js and Node, applying that to AI-powered products.
      </h2>
      <div className="mt-6">
        <PhotosCarousel />
      </div>
    </div>
  )
}
