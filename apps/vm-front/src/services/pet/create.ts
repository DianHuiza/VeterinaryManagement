import { CreatePet, Pet } from '../../types'
import { fetcher } from '../../utils/fetcher'
import { formatUrl } from '../../utils/formatUrl'

export async function createPet(pet: CreatePet) {
  const url = formatUrl(`/pets`)
  const res = await fetcher<Pet>(url, {
    method: 'POST',
    body: JSON.stringify(pet),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  return res
}
