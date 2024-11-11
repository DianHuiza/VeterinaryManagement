import { getErrorTypeFromRes } from './getErrorTypeFromRes'

export async function fetcher<T>(url: string, options?: RequestInit) {
  const res = await fetch(url, options)
  if (!res.ok) {
    const error = getErrorTypeFromRes(res)
    throw error
  }
  return (await res.json()) as T
}