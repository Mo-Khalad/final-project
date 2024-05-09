import React from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import NotFound from './Components/NotFound/NotFound';


let router= createBrowserRouter([
  {path:'', element: <Layout/> , children:[
    { path:'home', element:<Home/>},
    { path:'categories', element:<Categories/>},
    { path:'register', element:<Register/>},  
    { path:'login', element:<Login/>},
    { path:'products', element:<Products/>},  
    { path:'cart', element:<Cart/>},
    { path:'brands', element:<Brands/>},
    { path:'*', element:<NotFound/>},

  ]}
])
 
const App = () => {
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}

export default App

