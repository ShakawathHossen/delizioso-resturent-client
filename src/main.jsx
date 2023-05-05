import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import CheifDetails from './Components/CheifDetails/CheifDetails.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch(`https://delizioso-server-shakawathcseinfo19-gmailcom.vercel.app/chiefs`)
      },
      {
        path: "/:id",
        element: <PrivateRoute><CheifDetails/></PrivateRoute>,
        loader:()=>fetch(`https://delizioso-server-shakawathcseinfo19-gmailcom.vercel.app/chiefs`)
      },
      {
        path: "/blog",
        element:<Blog/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/registration",
        element:<Registration/>
      },
    ],
  },
  {
    path: "*",
    element:<ErrorPage/>

  }
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
