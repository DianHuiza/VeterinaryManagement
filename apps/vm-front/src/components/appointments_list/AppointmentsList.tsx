import { AppointmentDetail } from '../../types';
import { AppointmentCard } from './AppointmentCard';

interface AppointmentsListProps {
  appointments: AppointmentDetail[]
  canServe?: boolean
}
export const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, canServe }) => {
  return (
    <div className='mt-2'>
      {appointments.map((appointment) => (
        <AppointmentCard canServe={canServe} appointnment={appointment} key={appointment.id} />
      ))}
    </div>
  );
}
