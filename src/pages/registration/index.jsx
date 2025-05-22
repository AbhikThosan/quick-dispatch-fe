import { useNavigate } from "react-router-dom";
import AuthRegistration from "../../features/auth/registration";
import { Button } from "antd";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <AuthRegistration />
        <Button
          type="link"
          onClick={() => navigate("/")}
          className="mt-4 w-full"
        >
          Already have an account? Log In
        </Button>
      </div>
    </div>
  );
};

export default Registration;
