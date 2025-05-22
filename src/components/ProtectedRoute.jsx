import { Navigate } from "react-router-dom";
import { useStore } from "../store";

const ProtectedRoute = ({ children, requiredProfileSetup }) => {
  const { userInfo } = useStore();

  if (!userInfo) {
    return <Navigate to="/" replace />;
  }

  if (requiredProfileSetup && !userInfo.profileSetup) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;
