import Login from "./pages/Login/login"
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import Descricao from "./pages/Descricao/Descricao";
=======
import CadastroRestaurante from "./pages/CadastroRestaurante/CadastroRestaurante";
>>>>>>> b43cdb4193afd0dcee049406fa23f33c13515f07


function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
<<<<<<< HEAD
           <Route path="/Descricao" element={<Descricao />} />
=======
          <Route path="/CadstroRestaurante" element={<CadastroRestaurante />} />
>>>>>>> b43cdb4193afd0dcee049406fa23f33c13515f07
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;