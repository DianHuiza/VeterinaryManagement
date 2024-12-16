import { ClientWithPets } from '../../types';
import { fetcher } from '../../utils/fetcher';
import { formatUrl } from '../../utils/formatUrl';

export async function getClientById(id: string) {
  const url = formatUrl(`/clients/${id}`)
  const content = await fetcher<ClientWithPets>(url)
  return content
}