import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/home.jsx"
import Shop from "../shop/shop.jsx";
import About from "../components/About.jsx"
import Blog from "../components/Blog.jsx"
import SingleBook from "../components/SingleBook.jsx"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <Home/>
          },{
            path: "/shop",
            element: <Shop/>
          },{
            path: "/blog",
            element: <Blog/>
          },{
            path: "/book",
            element: <SingleBook/>
          },          {
            path: "/about",
            element: <About/>
          }

      ]
    },
  ]);
export default router;