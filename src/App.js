import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';

import MenuPrincipal from './pages/MenuPrincipal';

import ComponenteRegistro from './pages/ComponenteRegistro';
import ComponenteDireccion from './pages/ComponenteDireccion';

import ComponenteHome from './pages/ComponenteHome';
import ComponentePaginaTest from './pages/ComponentePaginaTest'; 
import ComponenteHombre from './pages/Hombre'; 
import Pruebas from './pages/pruebas'
import ComponenteAgregarProducto from './pages/ComponenteAgregarProducto';
import AgregarCategoria from './pages/AgregarCategoria';
import Logout from './pages/logout'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponenteTallas from './pages/ComponenteTallas';

import ComponenteAdminCategoria from './pages/ComponenteAdminCategoria';
import Productos from './pages/Productos';
import ComponenteAdminProductos from './pages/ComponenteAdminProductos';
import CarroDeCompras from './pages/CarroDeCompras';



function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/CarroDeCompras" element={<CarroDeCompras />}>   </Route>
      <Route path="/login" element={<ComponenteLogin />}>   </Route>
      <Route path="/logout" element={<Logout />}>   </Route>
      <Route path="/RegistroProducto" element={<ComponenteAgregarProducto />}>   </Route>
      <Route path='/RegistroTallas' element={<ComponenteTallas/>}></Route>
      <Route path="/AgregarCategoria" element={<AgregarCategoria />}>   </Route>
      <Route path='/Registro' element={<ComponenteRegistro/>}></Route>
      <Route path='/Direccion' element={<ComponenteDireccion/>}></Route>
      
      <Route path="/MenuPrincipal" element={<MenuPrincipal />}>   </Route>
      <Route path='/apartadoHombres' element={<ComponenteHombre/>}></Route>
      <Route path="/pruebas" element={<Pruebas />}>   </Route>
      <Route path="/" element={<MenuPrincipal />}>   </Route>

      <Route path="/ComponenteAdminCategoria" element={<ComponenteAdminCategoria />}>   </Route>
      <Route path="/ComponenteAdminProductos" element={<ComponenteAdminProductos />}>   </Route>

      <Route path='/Productos/:categoriaID' element={<Productos/>}></Route>

      
    </Routes>
    
  </BrowserRouter>

  );
}

export default App;