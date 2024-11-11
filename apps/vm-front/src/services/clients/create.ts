import { CreateClient } from '../../types'
import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function createClient(data: CreateClient) {
  const url = formatUrl('/clients')
  const content = await fetcher(url, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return content
}