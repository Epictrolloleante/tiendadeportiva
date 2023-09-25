import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponenteLogin from './pages/ComponenteLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<ComponenteLogin />}>
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;