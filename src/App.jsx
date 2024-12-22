import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cart, setCart] = useState({});

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductPage cart={cart} setCart={setCart} />,
    },
    {
      path: '/cart',
      element: <CartPage cart={cart} setCart={setCart} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;