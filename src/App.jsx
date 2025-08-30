import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicePage from './pages/servicePage/Service';
import About from './pages/aboutPage/About';
import Home from './pages/homePage/Home';
import Layout from './Layout'; // Import the new Layout component
import Stay from './pages/stay/Stay';
import Cafe from './pages/cafe/Cafe';
import Vend from './pages/vend/Vend';
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Set the Layout as the parent element for routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stay",
        element: <Stay />,
      },
      {
        path: "/cafe",
        element: <Cafe />,
      },
      {
        path: "/vend",
        element: <Vend />,
      },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;