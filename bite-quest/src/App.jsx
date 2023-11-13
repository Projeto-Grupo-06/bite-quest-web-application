
import React from 'react';
import GlobalStyles from './styles/global';
import HomePage from './pages/HomePage/HomePage';
import Cadastro from "./pages/Cadastro/cadastro"
import Login from "./pages/Login/login"


function App() {
  return (
    <>

      <GlobalStyles />
      {/* <Route path="/" exact element={HomePage} /> */}
      {/* <Route path="/cadastro" element={Cadastro} /> */}
      <HomePage /> 
    </>
  );
}

export default App;
