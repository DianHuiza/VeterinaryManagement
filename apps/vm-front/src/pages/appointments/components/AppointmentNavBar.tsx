import { AppointmentNavLink } from './AppointmentNavLink';

export const AppointmentsNavBar: React.FC = () => {
  
  return (
    <div className='bg-light rounded-t-lg px-4 py-2 sticky top-0'>
      <h2 className='text-xl'>Turnos</h2>
      <div>
        <nav className='flex justify-between gap-4 bg-secondary rounded-3xl w-min p-1'>
          <AppointmentNavLink to='today'>
            Hoy
          </AppointmentNavLink>
          <AppointmentNavLink to='pending'>
            Pendientes
          </AppointmentNavLink>
          <AppointmentNavLink to='missed'>
            Perdidos
          </AppointmentNavLink>
        </nav>
      </div>          
    </div>
  );
}
