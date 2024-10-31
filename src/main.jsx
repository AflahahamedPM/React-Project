import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Destinations from './components/Destinations.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/destinations",
    element:<Destinations />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
