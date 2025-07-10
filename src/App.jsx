import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ServicePage from './pages/servicePage/ServicePage';
import About from './pages/aboutPage/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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