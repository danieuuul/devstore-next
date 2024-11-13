import { Product } from '@/lib/types/products'
import { api } from '../config'

export async function getProductBySlug(
  slug: string,
  init?: RequestInit
): Promise<Product> {
  const response = await api(`/products/${slug}`, init)

  const product = await response.json()

  return product
}
