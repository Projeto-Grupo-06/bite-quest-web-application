import Login from "./pages/Login/login"
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Descricao from "./pages/Descricao/Descricao";


function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/Descricao" element={<Descricao />} />
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;