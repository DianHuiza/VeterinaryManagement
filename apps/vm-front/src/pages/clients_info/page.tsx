import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { clientDetail } from '../../mocks/ClientDetail'
import { PetsTable } from './components/PetsTable'

export const Component = () => {
  const { id = '' } = useParams()
  const { data } = useQuery({
    queryKey: ['client', id],
    queryFn: () => clientDetail,
  })
  return (
    <div className='p-4 box-border w-full'>
      <div className='bg-light rounded-lg p-4'>
        <p className='text-xl font-bold'>{data?.fullName}</p>
        <div className='flex gap-6 mt-4 *:truncate'>
          <span>Email: {data?.email}</span>
          <span>Phone: {data?.phone}</span>
          <span>Address: {data?.address}</span>
          <span>DNI: {data?.dni}</span>
        </div>
      </div>
      <PetsTable pets={data?.pets ?? []} />
    </div>
  )
}