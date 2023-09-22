import { RouteObject } from 'react-router-dom'
import InfoPage from 'src/pages/info-page/info-page'
import Main from 'src/pages/main/main'
import NotFound from 'src/pages/not-found/not-found'

const router: RouteObject[] = [
   {
    path: '/',
    element: <Main />,
  },
  {
    path: '/more',
    element: <InfoPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router