import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/home.jsx"
import About from "../components/About.jsx"
import Blog from "../components/Blog.jsx"
import Shop from "../shop/shop.jsx"
import SingleBook from "../components/SingleBook.jsx"
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import UploadBooks from  "../dashboard/UploadBook.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/book",
        element: <SingleBook/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/book/:id",
        element: <SingleBook/>,
        loader : ({params}) => fetch(`http://localhost:5173/${params.id}`)
      },
      {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children:[
          {
            path: "/admin/dashboard/", // Relative path, not absolute
            element: <Dashboard/> 
          },
          {
            path: "/admin/dashboard/upload",
            element: <UploadBooks/>
          },
          {
            path: "/admin/dashboard/manage",
            element: <ManageBooks/>
          },
          {
            path: "/admin/dashboard/edit",
            element: <EditBooks/>
          },
          {
            path: "/admin/dashboard/edit-books/:id",
            element: <EditBooks/>,
            loader : ({params}) => fetch(`http://localhost:5173/${params.id}`)
          }
        ]
      }
    ]
  }
  
]);


export default router;