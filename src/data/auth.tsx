import { TAuthData } from "../types/auth";

export const auth_data: TAuthData = {
  login: {
    title: "Login",
    subTitle: "Let's log you in quickly",
    backgroundText: "Login",
    inputs: [
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email",
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email address",
        },
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Password",
        required: {
          value: true,
          message: "Password is required",
        },
        pattern: {
          value: /^[A-Za-z\d@$!%*?&]{6,}$/,
          message:
            "Password must be at least 6 characters and include only letters, numbers, or special characters.",
        },
      },
    ],
    button: "Login",
    toast_message: "User login successfully",
    account: {
      title: "don't have an account?",
      subTitle: "sign-up",
      link: "/register",
    },
  },

  register: {
    title: "Register",
    subTitle: "Let's sign you up quickly",
    backgroundText: "Sign Up",
    inputs: [
      {
        name: "username",
        label: "Username",
        type: "username",
        placeholder: "Enter your name",
        required: {
          value: true,
          message: "Username is required",
        },
        pattern: {
          value: /^/,
          message: "Please enter a valid username address",
        },
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email ",
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email address",
        },
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        required: {
          value: true,
          message: "Password is required",
        },
        pattern: {
          value: /^[A-Za-z\d@$!%*?&]{6,}$/,
          message:
            "Password must be at least 6 characters and include only letters, numbers, or special characters.",
        },
      },
    ],
    button: "Register",
    toast_message: " User registered successfully",
    account: {
      title: "already have an account?",
      subTitle: "log-in",
      link: "/login",
    },
  },
};
