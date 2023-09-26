import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';
<<<<<<< HEAD
import MenuPrincipal from './pages/MenuPrincipal';
=======
import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest';  
>>>>>>> d4b53ff982f96dc884280c3768966b214b073f42
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>
      <Route path="/MenuPrincipal" element={<MenuPrincipal />}>   </Route>
      
    </Routes>
  </BrowserRouter>
=======
      <Routes>
        <Route path="/" element={<ComponenteHome />}></Route>
        <Route path="/login" element={<ComponenteLogin />}></Route>
        <Route path="/test1" element={<ComponentePaginaTest />}></Route>
      </Routes>
    </BrowserRouter>
>>>>>>> d4b53ff982f96dc884280c3768966b214b073f42
  );
}

export default App;