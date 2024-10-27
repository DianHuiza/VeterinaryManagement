import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages'
import BaseLayout from './layout/BaseLayout'

const routes = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
]

export const browserRouter = createBrowserRouter(routes)