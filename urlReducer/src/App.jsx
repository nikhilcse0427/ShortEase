import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/app.layout.jsx'
import './App.css'
import LandingPage from './pages/landingPage.jsx'
import Dashboard from './pages/dashboard.jsx'
import Link from './pages/link.jsx'
import Auth from './pages/auth.jsx'
import RedirectLink from './pages/redirect-link.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/link',
          element: <Link />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/auth',
          element: <Auth />
        },
        {
          path: '/link/:id',
          element: <Link />
        },
        {
          path: '/:id',
          element: <RedirectLink />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App