import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */} {/* Not required because of auth0 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
