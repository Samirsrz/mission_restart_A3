import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";

import App from "../App"
import Home from "../components/Home/Home";
export const router = createBrowserRouter([

{
    path:'/',
    element:<Root />,
    errorElement:<div>This is ERROR</div>,
    children:[
      {
        index:true,
        Component: Home
      },
 












    ]

}


])