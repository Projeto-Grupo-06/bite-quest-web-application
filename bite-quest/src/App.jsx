
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import GlobalStyles from './styles/global';
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import Login from "./pages/Login/login"


function App() {
  return (
    <>
   <GlobalStyles />

      <Router>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />

        </Routes>

      </Router>



    </>
  );
}

export default App;
