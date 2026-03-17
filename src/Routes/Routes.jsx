import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";


import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import { Suspense } from "react";
import AppDetails from "../components/AppDetails/AppDetails";
export const router = createBrowserRouter([

{
    path:'/',
    element:<Root />,
    errorElement:<div>This is ERROR</div>,
    children:[
      {
        index:true,
         loader:async()=>{
          const res = await fetch("appData.json");
          return res.json()
         },
        Component: Home
      },
      {
        path:'apps',
          loader:async()=>{
          const res = await fetch("appData.json");
          return res.json()
         },
        Component: Apps
      },
      {
        path:'apps/:id',
          loader:async()=>{
          const res = await fetch("appData.json");
          return res.json()
         },
        Component: AppDetails
      },


      {
        path:'installation',
        Component: Installation,
      },
 

    ]

}


])