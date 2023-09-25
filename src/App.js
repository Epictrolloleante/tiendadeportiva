import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';
import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponenteHome />}></Route>
        <Route path="/login" element={<ComponenteLogin />}></Route>
        <Route path="/test1" element={<ComponentePaginaTest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;