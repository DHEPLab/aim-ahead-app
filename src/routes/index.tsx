import React from "react";
import Home from "../pages/Home";
import ExampleUserPage from "../pages/ExampleUserPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <ExampleUserPage />,
  },
];

export { routes };
