import { AppointmentDetail } from '../../types';
import { BordedButton } from '../buttons/BordedButton';
import { SolidButton } from '../buttons/SolidButton';

interface AppointmentCardProps {
  appointnment: AppointmentDetail
  canServe?: boolean
}
 
export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointnment, canServe }) => {
  return (
    <div style={{borderColor: appointnment.room.color}} className='rounded-lg bg-light mb-2 min-h-32 border-t-4 py-2 px-6'>
      <div className=' flex justify-between'>
        <p className=' text-xl font-semibold'>{appointnment.pet.client.fullName}-{appointnment.pet.name}</p>
        <div>
          <span className='mr-4'>Fecha: 10/10/2024</span>
          <span>Hora 3:40-4:40</span>
        </div>
      </div>
      <div className='text-lg mb-2 font-medium'>
        <span>{appointnment.room.name}: {appointnment.service.name}</span>
      </div>
      <p>{appointnment.reason}</p>
      <div className='flex gap-2 justify-end mt-4 mb-2'>
        <SolidButton colorClass='bg-light hover:text-dark text-primary border-'>Eliminar</SolidButton>
        <BordedButton colorClass='hover:text-dark text-primary'>Posponer</BordedButton>
        {canServe && <SolidButton colorClass='bg-primary text-light hover:bg-dark'>Atender</SolidButton>}
      </div>
    </div>
  );
}
