import { FieldValues } from "react-hook-form";
import { auth_data } from "../../../data/auth";
import AuthForm from "../_components/AuthForm";

const RegisterPage = () => {
  const submitFunction = (data: FieldValues) => {
    console.log("Submitted Data:", data);
  };

  const loading = false;
  return (
    <div className="flex items-center h-full w-full">
      <AuthForm
        auth_data={auth_data.register}
        loading={loading}
        submitFunction={submitFunction}
      />
    </div>
  );
};

export default RegisterPage;
