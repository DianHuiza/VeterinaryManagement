import { createBrowserRouter } from 'react-router-dom'
import { Appointments, AppointmentsMissed, AppointmentsPending, AppointmentsToday, ClientInfo, Clients, Dashboard } from './pages'
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
            path: 'info:id',
            element: <ClientInfo />,
          },
        ],
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)