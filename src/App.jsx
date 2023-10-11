import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detalails from './pages/Details';
import Testimonials from './pages/Testimonials';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/details',
      element: <Detalails />,
    },
    {
      path: '/testimonials',
      element: <Testimonials />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
