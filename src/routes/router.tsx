import { ReactElement } from "react";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import TrendPage from "../pages/Trend/TrendPage";
import AboutPage from "../pages/About/AboutPage";
import ViewBlog from "../pages/Blogs/ViewBlog";
import CreateBlog from "../pages/Blogs/CreateBlog";

export interface MainRoute {
  path: string;
  element: ReactElement;
  title: string;
}

export const mainRoutes: MainRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
    title: "Login",
  },
  {
    path: "/register",
    element: <RegisterPage />,
    title: "Register",
  },
  {
    path: "/trending",
    element: <TrendPage />,
    title: "Trend",
  },
  {
    path: "/about",
    element: <AboutPage />,
    title: "About",
  },
];

export const privateMainRoutes: MainRoute[] = [
  {
    path: "/create",
    element: <CreateBlog />,
    title: "Create",
  },
  {
    path: "/blog/:id",
    element: <ViewBlog />,
    title: "View",
  },
];
