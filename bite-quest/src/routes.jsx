import Login from "./pages/Login/login"
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Descricao from "./pages/Descricao/Descricao";
import CadastroRestaurante from "./pages/CadastroRestaurante/CadastroRestaurante";
import Busca from "./pages/Busca/Busca";
import Perfil from "./pages/Perfil/Perfil";
import AtualizarRestaurante from "./pages/AtualizarRestaurante/AtualizarRestaurante";

function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Busca" element={<Busca />} />
          <Route path="/Descricao/:id" element={<Descricao />} />
          <Route path="/Perfil/:id" element={<Perfil/>} />
          <Route path="/CadastroRestaurante" element={<CadastroRestaurante />} />
          <Route path="/AtualizarRestaurante/:id" element={<AtualizarRestaurante />} />
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;