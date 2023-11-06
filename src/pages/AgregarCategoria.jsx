import React, { useState } from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/AgregarCategoria.css';

export default function AgregarCategoria() {
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '', // Aquí guardaremos solo el nombre de la imagen
    altimagen: '',
  });

  const [imagen, setImagen] = useState('https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      // Extraer el nombre del archivo de la URL
      const fileName = e.target.files[0].name;
      setImagen(fileName);

      // Actualizar formData para guardar solo el nombre del archivo
      setFormData({
        ...formData,
        imagen: fileName,
      });
    } else {
      setImagen('https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la solicitud POST al servidor para agregar la categoría
    fetch('http://serverreyes.ddns.net:8000/api/categories', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta del servidor (por ejemplo, confirma que la categoría se agregó correctamente)
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => {
        // Maneja errores en la solicitud
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <ComponenteLayout Titulo='Categoria'>
      <div className='fondoP'>
        <div className='contenedor'>
          <div className='registro'>
            <h3>REGISTRO DE CATEGORIAS</h3>
            <form onSubmit={handleSubmit}>
              <div className='infoR'>
                <p>Categoria:</p>
                <input
                  type='text'
                  placeholder='Introduce el nombre de la categoria'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <p>Alt Imagen:</p>
                <input
                  type='text'
                  placeholder='Introduce el nombre de la imagen'
                  name='altimagen'
                  value={formData.altimagen}
                  onChange={handleChange}
                />
                <label htmlFor='file-input' className='custom-file-upload'></label>
                <input
                  type='file'
                  id='file-input'
                  className='hidden-file-input'
                  onChange={handleFileChange}
                  accept='image/*' // Solo permite archivos de imagen
                />
                <img id='imagen' src={imagen} alt='Vista previa de la imagen' />
              </div>
              <button type='submit'>Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </ComponenteLayout>
  );
}