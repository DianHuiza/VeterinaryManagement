import { createBrowserRouter } from 'react-router-dom'
import { Appointments, AppointmentsMissed, AppointmentsPending, AppointmentsToday, Dashboard } from './pages'
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
      }
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)