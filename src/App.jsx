import { Routes, Route } from "react-router-dom";
import Landing from "../src/componentes/pages/Landing/Landing";
import LoginForm from "./componentes/pages/Login/LoginForm";
import DashboardBitacora from "./componentes/pages/DashBitacora/DashboardBItacora";

function App() {
  return (
    <div className="app-container">
      {" "}
      {/* Contenedor principal */}
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard-bitacora" element={<DashboardBitacora />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
