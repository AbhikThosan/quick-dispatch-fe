import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import PageNotFound from "./pages/not-found";
import { useStore } from "./store";
import { useEffect } from "react";
import { useGetUserInfo } from "./features/auth/hook/useGetUserInfo";
import toast from "react-hot-toast";
import { Spin } from "antd";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const { userInfo, setUserInfo } = useStore();
  const { userData, loading } = useGetUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      userData()
        .then((data) => {
          setUserInfo(data.user);
          if (data.user.profileSetup) {
            navigate("/chat");
          } else {
            navigate("/profile");
          }
        })
        .catch((err) => {
          if (err.response?.status === 401 || err.response?.status === 403) {
            setUserInfo(null);
            navigate("/");
            toast.error(err.response?.data || "Please Log In!");
          } else {
            toast.error(err.response?.data || "Please Log In!");
          }
        });
    }
  }, [userInfo, userData, setUserInfo, navigate]);

  if (loading) {
    return (
      <div>
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute requiredProfileSetup={true}>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute requiredProfileSetup={false}>
            <Profile />{" "}
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
