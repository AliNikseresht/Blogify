import { ReactElement } from "react";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import TrendPage from "../pages/Trend/TrendPage";
import AboutPage from "../pages/About/AboutPage";
import ViewBlog from "../pages/Blogs/ViewBlog";
import EditBlog from "../pages/Blogs/EditBlog";
import CreateBlog from "../pages/Blogs/CreateBlog";
import UserProfile from "../pages/Profile/UserProfile";

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
    path: "/:uid",
    element: <UserProfile />,
    title: "Profile",
  },
  {
    path: "/create",
    element: <CreateBlog />,
    title: "Create",
  },
  {
    path: "/blog/:blogid",
    element: <ViewBlog />,
    title: "View",
  },
  {
    path: "/blog/:blogid/edit",
    element: <EditBlog />,
    title: "Edit",
  },
];
