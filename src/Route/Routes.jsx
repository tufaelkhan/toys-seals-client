import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login";
import SignUp from "../Pages/Home/SignUp";
import ShopDetails from "../Pages/Home/Home/ShopDetails";

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