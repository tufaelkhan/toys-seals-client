import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login";
import SignUp from "../Pages/Home/SignUp";
import ShopDetails from "../Pages/Home/Home/ShopDetails";
import Blog from "../Pages/Blog";
import AllToys from "../Pages/Home/AllToys";
import AddToys from "../Pages/AddToys";
import MyToys from "../Pages/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: '/addtoys',
          element: <AddToys></AddToys>
        },
        {
          path: '/mytoys',
          element: <MyToys></MyToys>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      {
        path: '/shop/:id',
        element: <ShopDetails></ShopDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/shop/${params.id}`)
      }
      ]
    },
  ]);

  export default router