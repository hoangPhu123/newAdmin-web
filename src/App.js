import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage/LoginPage";
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
// import Layout from "./HOC/Layout";
import AdminUserPage from "./Page/AdminUserPage/AdminUserPage";
// import Spinner from "./Component/spinner/Spinner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminUserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
