import { AppointmentsList } from '../../components'
import { appointments } from '../../mocks/Appointments'

 export const Component = () => {
  return(
    <AppointmentsList canServe appointments={appointments}/>
  )
 }