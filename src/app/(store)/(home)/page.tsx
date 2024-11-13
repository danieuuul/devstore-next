import { getFeaturedProducts } from '@/lib/api/products/getFeaturedProducts'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home'
}
export default async function HomePage() {
  const products = await getFeaturedProducts()
  const [highlightedProducted, ...otherProducts] = products.slice(0, 3)

  return (
    <div className="grid max-h-[860px] grid-cols-3 grid-rows-2 gap-6">
      <Link
        href={`/product/${highlightedProducted.slug}`}
        className="group relative col-span-2 row-span-2 rounder-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src={highlightedProducted.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProducted.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProducted.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative rounder-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 0
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
