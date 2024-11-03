import { Outlet } from 'react-router-dom'
import { AppointmentsNavBar } from './components/AppointmentNavBar'
import { RoomsList } from './components/RoomsList'

export const Component = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4 items-start pt-20'>
      <div>
        <RoomsList />
      </div>
      <div className='col-span-2'>
        <AppointmentsNavBar />
        <Outlet />
      </div>
    </div>
  )
}