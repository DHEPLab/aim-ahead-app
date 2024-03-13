import React from "react";
import { RouteObject, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import ExampleUserPage from "../pages/ExampleUserPage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import AppLayout from "../components/AppLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <ExampleUserPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
];

export { routes };
