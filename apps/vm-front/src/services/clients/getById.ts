import { fetcher } from '../../utils/fetcher';
import { formatUrl } from '../../utils/formatUrl';

export async function getClientById(id: string) {
  const url = formatUrl(`/clients/${id}`)
  const content = await fetcher(url)
  return content
}