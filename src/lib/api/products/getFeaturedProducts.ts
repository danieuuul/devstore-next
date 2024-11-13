import { Product } from '../../types/products'
import { api } from '../config'

export async function getFeaturedProducts(
  init?: RequestInit
): Promise<Product[]> {
  const response = await api('/products/featured', init)
  const products = await response.json()
  return products
}
