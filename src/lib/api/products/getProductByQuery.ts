import { Product } from '../../types/products'
import { api } from '../config'

export async function getProductsByQuery(
  query: string,
  init?: RequestInit
): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, init)
  const products = await response.json()
  return products
}
