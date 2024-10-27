import { createBrowserRouter } from 'react-router-dom'
import { Appointments, Dashboard } from './pages'
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
      }
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)