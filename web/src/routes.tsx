import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Base from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/voll' element={<Base />}>
        <Route index element={<PaginaInicial />} />
        <Route path="/voll/dashboard" element={<Dashboard />} />
      </Route>
      <Route path='/voll' element={<PaginaBaseFormulario/>}>
        <Route path="/voll/login" element={<Login/>} />
      </Route>
    </Routes>
  );
}
