import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function deleteClient(id: string) {
  const url = formatUrl(`/clients/${id}`)
  const content = await fetcher(url, {
    credentials: 'include',
    method: 'DELETE',
  })
  return content
}