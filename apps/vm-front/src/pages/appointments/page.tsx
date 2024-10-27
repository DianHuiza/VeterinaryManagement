import { Outlet } from 'react-router-dom'
import { AppointmentsNavBar } from './components/AppointmentNavBar'

export const Component = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div>

      </div>
      <div className='col-span-2'>
        <AppointmentsNavBar />
        <Outlet />
      </div>
    </div>
  )
}