
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import News from '../Pages/News/News';
import Register from '../Pages/Register/Register';
import Root from '../layout/Root';

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: () => fetch('/news.json')

        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/news/:id",
          element:<PrivateRoute> <News></News> </PrivateRoute>
        }
      ]
    },
  ]);

export default Router;