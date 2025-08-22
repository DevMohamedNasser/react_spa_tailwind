import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "contact",
          element: <Contact />
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
