import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx'
import ContextProvider from './Auth/ContextProvider.jsx';
import Signup from './pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/signin',
        element:<SignIn />
      },
      {
        path:'/signup',
        element:<Signup />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <RouterProvider router={router} />
  </ContextProvider>
)
