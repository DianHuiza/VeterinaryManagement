import AppointmentsList from '../../components/appointments_list/AppointmentsList'
import { appointments } from '../../mocks/Appointments'

export const Component = () => {
  return (
    <AppointmentsList appointments={appointments} />      
  )
}