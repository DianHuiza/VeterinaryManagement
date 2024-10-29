import { AppointmentDetail } from '../../types';

interface AppointmentCardProps {
  appointnment: AppointmentDetail
}
 
export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointnment }) => {
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
        <span>{appointnment.room.name}</span>
        <span>{appointnment.service.name}</span>
      </div>
      <p>{appointnment.reason}</p>
      <div>
        <button>Atender</button>
      </div>
    </div>
  );
}
