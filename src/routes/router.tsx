import { ReactElement } from "react";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";

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
];

export const privateMainRoutes: MainRoute[] = [
    
]