import React, { useEffect, useState } from "react";
import { Navigate, useRoutes} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Topbar from "./Components/Topbar/Topbar";
import Clockin from "./Pages/Clock/Clockin"
import Role from "./Pages/Clock/Clockin-role";
import ClockInBoard from "./Pages/Clock/Clockin-board";
import Home from "./Pages/Home/home";
import Bottombar from "./Components/Bottombar/Bottombar";


export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <Login/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/clockin",
      element:  <Topbar />,
      children: [
        { index: true, element: <Clockin /> },
        { path: "role", element: <Role/> },
        { path: "board/:id", element: <ClockInBoard/> },
      ],
    },
    {
      path: "/home",
      element:  <Bottombar />,
      children: [
        { index: true, element: <Home/> },
        // { path: "role", element: <Role/> },
        // { path: "board/:id", element: <ClockInBoard/> },
      ],
    },
  ]);

  return routes;
}
