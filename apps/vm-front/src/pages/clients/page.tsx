import { Outlet } from 'react-router-dom'
import { ClientAsideMenu } from './components/ClientAsideMenu'

export const Component = () => {
  return(
    <div className='flex pt-16 h-screen'>
      <ClientAsideMenu />
      <Outlet />
    </div>
  )
}