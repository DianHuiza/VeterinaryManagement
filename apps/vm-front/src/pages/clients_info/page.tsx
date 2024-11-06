import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { clientDetail } from '../../mocks/ClientDetail'
import { PetsTable } from './components/PetsTable'
import { EnvelopeIcon } from '../../assets/icons/EnvelopeIcon'
import { PhoneIcon } from '../../assets/icons/PhoneIcon'
import { MapPinIcon } from '../../assets/icons/MapPinIcon'
import { IdentificationIcon } from '../../assets/icons/IdentificationIcon'

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
          <span className='flex items-center gap-2'><EnvelopeIcon /> {data?.email}</span>
          <span className='flex items-center gap-2'><PhoneIcon /> {data?.phone}</span>
          <span className='flex items-center gap-2'><MapPinIcon /> {data?.address}</span>
          <span className='flex items-center gap-2'><IdentificationIcon /> {data?.dni}</span>
        </div>
      </div>
      <PetsTable pets={data?.pets ?? []} />
    </div>
  )
}