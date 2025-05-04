import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import PageNotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
