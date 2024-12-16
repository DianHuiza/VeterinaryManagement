import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { PetsTable } from './components/PetsTable'
import { EnvelopeIcon } from '../../assets/icons/EnvelopeIcon'
import { PhoneIcon } from '../../assets/icons/PhoneIcon'
import { MapPinIcon } from '../../assets/icons/MapPinIcon'
import { IdentificationIcon } from '../../assets/icons/IdentificationIcon'
import { InfoEditableField } from './components/InfoEditableField'
import { getClientById } from '../../services/clients/getById'
import { clientUpdateSchema } from '../../utils/validations/client'
import { updateClient } from '../../services/clients/update'
import { CreateClient } from '../../types'

export const Component = () => {
  const { id = '' } = useParams()
  const { data } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClientById(id),
  })

  const editFn = async (payload: Partial<CreateClient>) => {updateClient(id, payload)}

  return (
    <div className='p-4 box-border w-full'>
      <div className='bg-light rounded-lg p-4'>
        <p className='text-xl font-bold'>{data?.fullName}</p>
        <div className='flex gap-6 mt-4'>
          <div className='*:truncate flex-1'>
            <InfoEditableField type='text' content={data?.email} labelContent={<EnvelopeIcon />} id='email' name='email' editFn={editFn} validationSchema={clientUpdateSchema}/>
            <InfoEditableField type='text' content={data?.phone} labelContent={<PhoneIcon />} id='phone' name='phone' editFn={editFn} validationSchema={clientUpdateSchema}/>
          </div>
          <div className='*:truncate flex-1'>
            <InfoEditableField type='text' content={data?.address} labelContent={<MapPinIcon />} id='address' name='address' editFn={editFn} validationSchema={clientUpdateSchema}/>
            <InfoEditableField type='text' content={data?.dni} labelContent={<IdentificationIcon />} id='dni' name='dni' editFn={editFn} validationSchema={clientUpdateSchema}/>
          </div>
        </div>
      </div>
      <PetsTable pets={data?.pets ?? []} />
    </div>
  )
}