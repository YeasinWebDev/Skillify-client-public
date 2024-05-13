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
import AddCourse from './pages/AddCourse.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import AllCourses from './pages/AllCourses.jsx';
import Details from './pages/Details.jsx';
import toast, { Toaster } from 'react-hot-toast';
import BookedCourses from './pages/BookedCourses.jsx';
import ManageCourses from './pages/ManageCourses.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import CourseToDo from './pages/CourseToDo .jsx';

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
      },
      {
        path:"/addCourse",
        element:<PrivateRoute><AddCourse/></PrivateRoute>
      },
      {
        path:'/allCourses',
        element:<AllCourses/>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details/></PrivateRoute>
      },
      {
        path:'/bookedCourses',
        element:<PrivateRoute><BookedCourses/></PrivateRoute>
      },
      {
        path:'/manageCourses',
        element:<PrivateRoute><ManageCourses/></PrivateRoute>
      },
      {
        path:'/coursesToDo',
        element:<PrivateRoute><CourseToDo/></PrivateRoute>
      },
      {
        path:'/categories/:name',
        element:<CategoriesPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <RouterProvider router={router} />
      <Toaster />
  </ContextProvider>
)
