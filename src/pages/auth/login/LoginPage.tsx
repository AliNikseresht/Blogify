import { FieldValues } from "react-hook-form";
import AuthForm from "../_components/AuthForm";
import { auth_data } from "../../../data/auth";

const LoginPage = () => {
  const submitFunction = (data: FieldValues) => {
    console.log("Submitted Data:", data);
  };

  const loading = false;

  return (
    <div className="flex items-center h-full w-full">
      <AuthForm
        auth_data={auth_data.login}
        loading={loading}
        submitFunction={submitFunction}
      />
    </div>
  );
};

export default LoginPage;
