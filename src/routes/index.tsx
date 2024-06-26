import React from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import path from "./path";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import withCredencial from "../components/withCredencial";
import CasePage from "../pages/Case";
import Layout from "../components/Layout";
import Diagnose from "../pages/Diagnose";

const AuthedAppLayout = withCredencial(Layout);

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
        path: path.root,
        element: <Home />,
      },
      {
        path: path.diagnose,
        element: <Diagnose />,
      },
      {
        path: path.case,
        element: <CasePage />,
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
  {
    path: "*",
    element: <Navigate to={path.root} />,
  },
];

export { routes };
