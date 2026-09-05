import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Dashboard from './components/Dashboard.tsx'
import DoctorFullDetails from './components/DoctorFullDetails.tsx'
import DoctorData from './components/DoctorData.tsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "doctordetails/:id",
        element: <DoctorFullDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
