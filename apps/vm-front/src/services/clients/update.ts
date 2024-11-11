import { CreateClient } from '../../types'
import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function updateClient(id: string, data: Partial<CreateClient>) {
  const url = formatUrl(`/clients/${id}`)
  const content = await fetcher(url, {
    credentials: 'include',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return content
}