import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function softDeleteClient(id: string) {
  const url = formatUrl(`/clients/${id}/softDelete`)
  const content = await fetcher(url, {
    credentials: 'include',
    method: 'PUT',
  })
  return content
}