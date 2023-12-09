import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Base from "./pages/Base";
import PaginaInicial from "./pages/PaginaInicial";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/voll" element={<Base />}>
        <Route index element={<PaginaInicial />} />
        <Route path="/voll/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
