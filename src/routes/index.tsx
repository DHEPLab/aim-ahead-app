import ExampleHomePage from "../pages/ExampleHomePage";
import ExampleUserPage from "../pages/ExampleUserPage";

const routes = [
  {
    path: "/",
    element: <ExampleHomePage />,
  },
  {
    path: "/user",
    element: <ExampleUserPage />,
  },
];

export { routes };
