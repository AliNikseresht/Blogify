import { FaRegUser } from "react-icons/fa6";
import { TLayout } from "../types/layout";
import { FiTrendingUp } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

export const layoutData: TLayout = {
  sidebar: {
    title: "Blogify",
    link: "/",
    navbar: [
      { title: "Trending", link: "/trending", icon: <FiTrendingUp /> },
      { title: "About", link: "/about", icon: <FaBlog /> },
      { title: "Create", link: "/create", icon: <IoCreateOutline /> },
    ],
    auth: [
      {
        title: "Login",
        link: "/login",
      },
      {
        title: "Register",
        link: "/register",
      },
    ],
    profile_lists: [
      { title: "Profile", icon: <FaRegUser /> },
      { title: "Logout", icon: <TbLogout2 /> },
    ],
    createBlog: "Create",
  },
  footer: {
    title: "© 2025 Ali Nikseresht. All rights reserved.",
    subTitle:
      "using React, TypeScript, and Firebase. Share your story, inspire the world.",
  },
};
