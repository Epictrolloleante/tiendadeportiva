import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';

import MenuPrincipal from './pages/MenuPrincipal';

import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest'; 
import ComponenteHombre from './pages/Hombre'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>
<<<<<<< HEAD
      <Route path="/MenuPrincipal" element={<MenuPrincipal />}>   </Route>
      <Route path='/apartadoHombres' element={<ComponenteHombre/>}></Route>
=======
      <Route path="/" element={<MenuPrincipal />}>   </Route>
>>>>>>> 4ef570d7df68c52fae00e00ca45e762429891ff4
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;