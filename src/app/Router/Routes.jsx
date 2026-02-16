import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Layouts/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/skill.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        element: <div>This is profile</div>,
      },
      {
        path: "/login",
        element: <div>This is Login</div>,
      },
      {
        path: "/register",
        element: <div>This is Register</div>,
      },
    ],
  },
]);
