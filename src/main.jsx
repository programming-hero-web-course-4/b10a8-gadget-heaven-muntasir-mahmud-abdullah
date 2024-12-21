import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Errorpage from "./components/Errorpage/Errorpage";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails";
import GadgetProvider from "./components/Providers/GadgetProvider";
import Cart from "./components/Dashboard/Cart";
import Wishlist from "./components/Dashboard/Wishlist";
import Stats from "./components/Stats/Stats";
import Login from "./components/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"gadgets/:gadgetId",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"dashboard/cart",
            element:<Cart></Cart>
          },
          {
            path:"dashboard/wishlist",
            element:<Wishlist></Wishlist>
          },
        ]
      },
      {
        path:"statistics",
        element:<Stats></Stats>
      },
      {
        path:"login",
      element:<Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GadgetProvider>
    <RouterProvider router={router} />
    </GadgetProvider>
  </StrictMode>
);
