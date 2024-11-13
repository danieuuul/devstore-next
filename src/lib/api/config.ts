import { env } from '@/env'

export function api(
  path: string,
  init: RequestInit = {
    next: {
      revalidate: 60 * 60 // 1 hour default
    }
  }
) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
