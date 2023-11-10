import React, { useEffect, useState } from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/AgregarCategoria.css';
import AuthAdmin from './authAdmin';

export default function AgregarCategoria() {
  const token = localStorage.getItem('token');

  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [altImagen, setAltImagen] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const [formReset, setFormReset] = useState(false);

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('imagen', imagen);
  formData.append('altImagen', altImagen);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleAltImagenChange = (event) => {
    setAltImagen(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagenURL = URL.createObjectURL(file);
      setImagen(file);
      document.getElementById('imagen').src = imagenURL;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://serverreyes.ddns.net:8000/api/categories', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: formData,
      });

      if (response.ok) {
        // Operación exitosa, restablecer el formulario
        setFormReset(true);
      } else {
        // Manejar el caso en que la inserción no sea exitosa
        console.error('Error al insertar la categoría');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    AuthAdmin()
      .then((isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
      })
      .catch((error) => {
        console.log('Error en la solicitud:', error);
        setIsAuthenticated(false);
      });
  }, []);

  useEffect(() => {
    // Manejar el reset del formulario
    if (formReset) {
      setNombre('');
      setImagen('');
      setAltImagen('');
      document.getElementById('imagen').src = 'https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png';
      setFormReset(false);
    }
  }, [formReset]);

  if (isAuthenticated === null) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  else if (!isAuthenticated) {
    return (
      <div>
        <h1>ACCESO DENEGADO</h1>
      </div>
    );
  } else
    return (
      <ComponenteLayout Titulo='Categoria'>
        <div className='fondoP'>
          <div className='contenedor'>
            <div className='registro'>
              <h3>REGISTRO DE CATEGORIAS</h3>
              <div className='infoR'>
                <p>Categoria:</p> <input type='text' value={nombre} onChange={handleNombreChange} placeholder='Introduce el nombre de la categoria' />
                <p>Alt Imagen:</p> <input type='text' value={altImagen} onChange={handleAltImagenChange} placeholder='Introduce el nombre de la imagen' />
                <label htmlFor="file-input" className="custom-file-upload"></label>
                <input type="file" id="file-input" className="hidden-file-input" onChange={handleFileChange} />
                <img id='imagen' src='https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png'></img>
              </div>
              <button onClick={handleSubmit}>Registrar</button>
            </div>
          </div>
        </div>
      </ComponenteLayout>
    );
}