import { Button } from "antd";
import AuthLogin from "../../features/auth/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <AuthLogin />
        <Button
          type="link"
          onClick={() => navigate("/registration")}
          className="mt-4 w-full"
        >
          Don't have an account? Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
