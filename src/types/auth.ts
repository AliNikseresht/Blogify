import { TInput } from "./global";

export type TAuthForms = {
  title: string;
  subTitle: string;
  backgroundText: string;
  inputs: TInput[];
  button: string;
  toast_message: string;
  account: {
    title: string;
    subTitle: string;
    link: string;
  };
};

export type TAuthData = {
  login: TAuthForms;
  register: TAuthForms;
};
