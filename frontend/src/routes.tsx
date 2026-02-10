import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SsoSuccess from "./pages/SsoSuccess";
import Unauthorized from "./pages/Unauthorized";
import Error from "./pages/Error";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sso-success" element={<SsoSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
