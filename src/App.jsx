import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicePage from './pages/servicePage/Service';
import About from './pages/aboutPage/About';
import Home from './pages/homePage/Home';

const router = createBrowserRouter([
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
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;