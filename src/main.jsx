import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainText from './Components/MainText.jsx'
import Layout from './Layout.jsx';
import LoginPage from './Components/LoginPage.jsx';
import About from './Components/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainText />,
      },
      {
        path: "/login", 
        element: <LoginPage /> 
      },
      {
        path: "/aboutUs", 
        element: <About /> 
      }
    ],
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* this is the entry point of the application to the router */}
  </StrictMode>,
)
