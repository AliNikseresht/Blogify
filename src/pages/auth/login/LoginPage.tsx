import { FieldValues } from "react-hook-form";
import AuthForm from "../_components/AuthForm";
import { auth_data } from "../../../data/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const LoginPage = () => {
  const navigate = useNavigate();
  const submitFunction = async (data: FieldValues) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(`Login failed: ${error.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
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
