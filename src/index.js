import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  },
  {
    path: "Contact",
    element: <ContactPage/>,
  },

]);


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <RouterProvider router={router} />
);