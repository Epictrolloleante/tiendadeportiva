import React, { useEffect, useState } from 'react';
import styles from '../css/MenuPrincipal.css';

import ComponenteLayout from './ComponenteLayout';

export default function MenuPrincipal() {

  const [categoriasData, setCategoriasData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud para obtener los datos de categorías
    fetch('http://serverreyes.ddns.net:8000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategoriasData(data))
      .catch((error) => console.error('Error al obtener datos de categorías:', error));
  }, []);

  return (
    <ComponenteLayout Titulo="Home">
      <div className="principal1">
        {categoriasData.map((categoria, index) => (
          <div className="cont" key={index}>
            <div className="bottom"></div>
            <div className="card">
              <img src={'http://serverreyes.ddns.net:8000/storage/imagescat/'+categoria.imagen} alt={categoria.altimagen} />
              <br />
              <button>{categoria.nombre}</button>
            </div>
            <div className="left"></div>
            <div className="front"></div>
          </div>
        ))}
        <br/>
      </div>
    </ComponenteLayout>
  );
}
