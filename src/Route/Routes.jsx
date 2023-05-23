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
import ToyDetails from "../Pages/Home/ToyDetails";
import UpdateMyToy from "../Pages/UpdateMyToy";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: '/toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://toy-seller.vercel.app/toys')
        },
        {
          path: '/toys/:id',
          element: <ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`https://toy-seller.vercel.app/toys/${params.id}`)
        },
        {
          path: '/addtoys',
          element: <AddToys></AddToys>
        },
        {
          path: '/toysbyuser',
          element: <MyToys></MyToys>,
        },
        {
          path: '/toysbyuser/:id',
          element: <UpdateMyToy></UpdateMyToy>,
          loader: ({params}) => fetch(`https://toy-seller.vercel.app/toysbyuser/${params.id}`)
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
        loader: ({params})=> fetch(`https://toy-seller.vercel.app/shop/${params.id}`)
      }
      ]
    },
  ]);

  export default router