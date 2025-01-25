import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TAuthForms } from "../../../types/auth";
import SidePhoto from "../../../assets/authFormImage/Side-Background.png";
import { Link } from "react-router-dom";

type Props = {
  auth_data: TAuthForms;
  submitFunction: SubmitHandler<FieldValues>;
  loading: boolean;
};

const AuthForm = ({ auth_data, submitFunction, loading }: Props) => {
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <div className="w-[33%] h-screen hidden md:flex relative">
        <img
          src={SidePhoto}
          alt="side background"
          className="w-[100%] h-[100%] object-cover"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-6xl font-semibold">
          {auth_data.backgroundText}
        </h2>
      </div>
      <div className="w-full md:w-[60%] flex flex-col items-center md:items-start h-full">
        <h1 className="text-4xl mb-3">{auth_data.title}</h1>
        <p className="text-xl mb-7 c-gray">{auth_data.subTitle}</p>
        <form
          className="grid gap-5 grid-cols-1 w-full max-w-3xl"
          onSubmit={handleSubmit(submitFunction)}
        >
          {auth_data.inputs.map((form) => (
            <div className="flex flex-col">
              <input
                {...register(form.name, {
                  required: form.required,
                  pattern: form.pattern,
                })}
                className="placeholder:text-sm h-12 bg-transparent border border-green p-4"
                placeholder={form.placeholder}
                autoComplete="off"
              />
              <div className="c-red text-sm mt-2">
                {errors[form.name]?.message as string}
              </div>
            </div>
          ))}

          <div className="flex w-full justify-between items-center">
            <button
              className="btn bc-green mt-3 c-black border-none rounded-none px-5 md:text-xl md:px-7"
              type="submit"
            >
              {loading ? (
                <div className="loading loading-infinity" />
              ) : (
                auth_data.button
              )}
            </button>
            <div className="flex flex-col text-sm md:text-base">
              {auth_data.account.title}
              <Link to={auth_data.account.link} className="c-green">
                {auth_data.account.subTitle}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
