import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
import DetailPage from "./Page/DetailPage/DetailPage";
import Layout from "./HOC/Layout";
import AdminUserPage from "./Page/AdminUserPage/AdminUserPage";
import Spinner from "./Component/spinner/Spinner";

function App() {
  return (
    <div>
      <Spinner/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route path="/admin/user" element={<AdminUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
