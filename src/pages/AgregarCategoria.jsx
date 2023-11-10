import React, { useEffect, useState } from 'react';

import ComponenteLayout from './ComponenteLayout';
import styles from '../css/AgregarCategoria.css';

import AuthAdmin from './authAdmin';

export default function AgregarCategoria() {

  const token = localStorage.getItem('token');

  const [nombre, setNombre] = useState('');
  const [imagen, setimagen] = useState('');
  const [altImagen, setaltImagen] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('imagen', imagen);
  formData.append('altImagen', altImagen);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleAltImagenChange = (event) => {
    setaltImagen(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://serverreyes.ddns.net:8000/api/categories', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: formData,
    })
  };

  useEffect(() => {
    const file = document.getElementById('file-input');
    const img = document.getElementById('imagen');
    const defaultFile = 'https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png';

    AuthAdmin()
      .then((isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
        file.addEventListener('change', e => {
          if (file.files && file.files[0]) {
            const imagenURL = URL.createObjectURL(file.files[0]);
            img.src = imagenURL;
            setimagen(file.files[0]);
          } else {
            img.src = defaultFile;
          }
        });
      })
      .catch((error) => {
        console.log('Error en la solicitud:', error);
        setIsAuthenticated(false);
      });
  }, []); // El segundo argumento vacío [] indica que se ejecutará una vez después del montaje

  if (!isAuthenticated || isAuthenticated === null) {
    return (
      <div>
        <h1>ACCESO DENEGADO</h1>
      </div>
    );
  } else if (isAuthenticated)
    return (
      <ComponenteLayout Titulo='Categoria'>
        <div className='fondoP'>
          <div className='contenedor'>
            <div className='registro'>
              <h3>REGISTRO DE CATEGORIAS</h3>
              <div className='infoR'>
                <p>Categoria:</p> <input type='text' value={nombre} onChange={handleNombreChange} placeholder='Introduce el nombre de la categoria'></input>
                <p>Alt Imagen:</p> <input type='text' value={altImagen} onChange={handleAltImagenChange} placeholder='Introduce el nombre de la imagen'></input>
                <label for="file-input" class="custom-file-upload"></label>
                <input type="file" id="file-input" class="hidden-file-input" />
                <img id='imagen' src='https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png'></img>
              </div>
              <button onClick={handleSubmit}>Registrar</button>
            </div>
          </div>
        </div>
      </ComponenteLayout>
    )
}