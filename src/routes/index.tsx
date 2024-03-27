import React from "react";
import { RouteObject, Outlet } from "react-router-dom";

import path from "./path";
import Home from "../pages/Home";
import ExampleUserPage from "../pages/ExampleUserPage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import AppLayout from "../components/AppLayout";
import withCredencial from "../components/withCredencial";

const AuthedAppLayout = withCredencial(AppLayout);

const routes: RouteObject[] = [
  {
    path: path.root,
    element: (
      <AuthedAppLayout>
        <Outlet />
      </AuthedAppLayout>
    ),
    children: [
      {
        path: path.home,
        element: <Home />,
      },
      {
        path: "/user",
        element: <ExampleUserPage />,
      },
    ],
  },
  {
    path: path.login,
    element: <LoginPage />,
  },
  {
    path: path.signup,
    element: <SignUpPage />,
  },
];

export { routes };
