import React from "react";
import Home from "../pages/Home";
import ExampleUserPage from "../pages/ExampleUserPage";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <ExampleUserPage />,
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
