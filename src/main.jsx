import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
  

import Test from './components/Test.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'AddCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'UpdateCoffee',
    element:<UpdateCoffee></UpdateCoffee>

  },
  {
    path:'test',
    element:<Test></Test>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
