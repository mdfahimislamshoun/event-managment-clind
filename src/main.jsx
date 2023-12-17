import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from "./component/root/Root";
import ErrorPage from "./component/errorPage/ErrorPage";
import Home from "./component/home/Home";
import SignIn from "./component/login&logout/SignIn";
import SignUp from "./component/login&logout/SignUp";
import Private from "./component/private/Private";
import Details from "./component/events/Details";
import LearnMore from "./component/eventService/LearnMore";
import AboutTeam from "./component/team/AboutTeam";
import Client from "./component/client/Clint";
import AboutUs from "./component/home/AboutUs";
import Venues from "./component/venu/Venues";
import AuthProvider from "./component/provider/AuthProvider";
import Prement from "./component/checkOut/Prement";
import AllBooking from "./component/booking/AllBooking";
import MyBooking from "./component/booking/MyBooking";
const queryClint = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signIn",
        element:<SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:id",
        element: <Private><Details></Details> </Private>,
        loader: () => fetch("../public/event.json"),
      },
      {
        path: "/learnMore/:id",
        element: <Private> <LearnMore></LearnMore>  </Private>,
        loader: () => fetch("../public/services.json")
      },
      {
        path: "/aboutTeam/:id",
        element: <Private> <AboutTeam></AboutTeam>  </Private>,
        loader: () => fetch("../public/team.json")
      },
      {
        path: "/pay",
        element: <Private> <Prement></Prement></Private>,
        
      },
      {
        path: "/review",
        element: <Private> <Client></Client> </Private>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/venue",
        element: <Private> <Venues></Venues> </Private>,
      },
      {
        path: "/allbooking",
        element: <Private> <AllBooking></AllBooking> </Private>,
      },
      {
        path: "/mybooking",
        element: <Private> <MyBooking></MyBooking> </Private>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClint}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

