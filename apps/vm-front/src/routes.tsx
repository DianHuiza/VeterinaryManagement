import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages'

const routes = [
  {
    path: '/',
    element: <Dashboard/>,
  },
]

export const browserRouter = createBrowserRouter(routes)