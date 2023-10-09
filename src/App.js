import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';

import MenuPrincipal from './pages/MenuPrincipal';

import ComponenteRegistro from './pages/ComponenteRegistro';

import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest'; 
import ComponenteHombre from './pages/Hombre'; 
import Pruebas from './pages/pruebas'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>

      <Route path='/Registro' element={<ComponenteRegistro/>}></Route>
      
      <Route path="/MenuPrincipal" element={<MenuPrincipal />}>   </Route>
      <Route path='/apartadoHombres' element={<ComponenteHombre/>}></Route>
      <Route path="/pruebas" element={<Pruebas />}>   </Route>
      <Route path="/" element={<MenuPrincipal />}>   </Route>

      
    </Routes>
  </BrowserRouter>

  );
}

export default App;