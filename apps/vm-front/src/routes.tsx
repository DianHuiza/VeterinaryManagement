import { createBrowserRouter } from 'react-router-dom'
import { AddPet, Appointments, AppointmentsMissed, AppointmentsPending, AppointmentsToday, ClientCreate, ClientInfo, Clients, Dashboard } from './pages'
import BaseLayout from './layout/BaseLayout'

const routes = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/appointments',
        element: <Appointments />,
        children: [
          {
            path: 'today',
            element: <AppointmentsToday />,
          },
          {
            path: 'pending',
            element: <AppointmentsPending />,
          },
          {
            path: 'missed',
            element: <AppointmentsMissed />,
          },
        ],
      },
      {
        path: '/clients',
        element: <Clients />,
        children: [
          {
            path: 'info/:id',
            element: <ClientInfo />,
          },
          {
            path: 'create',
            element: <ClientCreate />
          },
          {
            path: 'add-pet/:id',
            element: <AddPet />
          }
        ],
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)