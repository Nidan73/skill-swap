import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Layouts/Home";
import SkillPage from "../../pages/SkillPage";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Profile from "../../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../../pages/forgetPass";
import Loader from "../../Components/common/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/skill.json"),
        path: "/",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "//skills/:id",
        loader: () => fetch("/skill.json"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <SkillPage></SkillPage>,
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
]);
