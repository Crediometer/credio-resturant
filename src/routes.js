import React, { useEffect, useState } from "react";
import { Navigate, useRoutes} from "react-router-dom";

import Login from "./Pages/Login/Login";
import Topbar from "./Components/Topbar/Topbar";
import Role from "./Pages/Clock/Clockin-role";
import ClockInBoard from "./Pages/Clock/Clockin-board";
import Sales from "./Pages/Sales/Sales";
import Layout from "./Components/layout/Layout";
import Orders from "./Pages/Orders/Order";
import Reservation from "./Pages/Reservation/Reservation";
import ReservationDetails from "./Pages/Reservation/ReservationDetails";
import TableView from "./Pages/Table/TableView";


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
        { index: true, element: <Role/> },
        { path: "board/:id", element: <ClockInBoard/> },
      ],
    },
    {
      path: "/home",
      element:  <Layout/>,
      children: [
        { index: true, element: <Orders/> },
        { path: "reservation", element: <Reservation/> },
        { path: "reservation/details", element: <ReservationDetails/> },
        { path: "table-view", element: <TableView/> },
      ],
    },
  ]);

  return routes;
}
