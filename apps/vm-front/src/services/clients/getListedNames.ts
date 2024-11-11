import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function getClientsListedNames() {
  const url = formatUrl('/clients/listed')
  const content = await fetcher(url)
  return content
}