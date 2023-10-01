import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';

import MenuPrincipal from './pages/MenuPrincipal';

import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest';  

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>
      <Route path="/" element={<MenuPrincipal />}>   </Route>
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;