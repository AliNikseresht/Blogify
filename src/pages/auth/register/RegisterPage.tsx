import { FieldValues } from "react-hook-form";
import { auth_data } from "../../../data/auth";
import AuthForm from "../_components/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const RegisterPage = () => {
  const navigate = useNavigate();

  const submitFunction = async (data: FieldValues) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User registered successfully");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(`Registration failed: ${error.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
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
