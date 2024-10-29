import { AppointmentDetail } from '../../types';
import { AppointmentCard } from './AppointmentCard';

interface AppointmentsListProps {
  appointments: AppointmentDetail[]
}
const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => {
  return (
    <div className='mt-2'>
      {appointments.map((appointment) => (
        <AppointmentCard appointnment={appointment} />
      ))}
    </div>
  );
}
 
export default AppointmentsList;