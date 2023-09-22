import { GlobalStyle } from 'src/app/styles/global.style'
import router from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
