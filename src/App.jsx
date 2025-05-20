import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Womens from './pages/Womens';
import Mens from './pages/Mens';
import Kids from './pages/Kids';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './details/ProductDetails';
import Collections from './pages/Collections';
import SingUp from './pages/SingUp';
import Navbar from './components/Navbar';

const App = () => {
  const [items, setItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.id !== Number(productId)));
  };

  const clearCart = () => {
    setItems([]);
  };
   const itemQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  const router = createBrowserRouter([
    
        { path: '', element:<><Navbar itemQuantity={itemQuantity}/> <Home />  </> },
        { path: 'womens', element: <><Navbar itemQuantity={itemQuantity} /> <Womens />  </> },
        { path: 'mens', element:<><Navbar itemQuantity={itemQuantity} /> <Mens />  </> },
        { path: 'kids', element:<><Navbar itemQuantity={itemQuantity}/> <Kids />  </>},
        { path: 'contact', element: <><Navbar itemQuantity={itemQuantity} /> <Contacts />  </> },
        { path: 'collection', element: <><Navbar itemQuantity={itemQuantity} /> <Collections />  </> },
        { path: 'login', element: <><Navbar itemQuantity={itemQuantity} /> <Login />  </>},
        { path: 'singup', element:<><Navbar itemQuantity={itemQuantity} /> <SingUp />  </> },
        {
          path: 'cart',
          element:(
            <>
            <Navbar itemQuantity={itemQuantity} />
            <Cart
              itemQuantity={itemQuantity}
              items={items}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
            </>
            
          ),
        },
        {
          path: 'productdetails/:productId',
          element:<> <Navbar itemQuantity={itemQuantity}/> <ProductDetails addToCart={addToCart} /> </>,
        },
  ]);

  return (
    <div className='flex flex-col w-full bg-gradient-to-b from-pink-200 via-white to-pink-200 items-center font-[Montserrat]'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
