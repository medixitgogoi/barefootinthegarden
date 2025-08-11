import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicePage from './pages/servicePage/Service';
import About from './pages/aboutPage/About';
import Home from './pages/homePage/Home';
import Layout from './Layout'; // Import the new Layout component

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
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // Add other page routes here as children
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;