import { ClientsListedNames } from '../../types'
import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'



export async function getClientsListedNames(query: string, pageParam: number) {
  const url = formatUrl('/clients/listed', {
    q: query,
    page: pageParam
  })
  const content = await fetcher<ClientsListedNames>(url)
  return content
}