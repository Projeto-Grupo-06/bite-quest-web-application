import Login from "./pages/Login/login"
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CadastroRestaurante from "./pages/CadastroRestaurante/CadastroRestaurante";


function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadstroRestaurante" element={<CadastroRestaurante />} />
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;