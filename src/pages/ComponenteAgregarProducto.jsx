
import React, { useEffect, useState } from 'react';
import styles from '../css/ComponenteAgregarProducto.css';
import ComponenteLayout from './ComponenteLayout';

export default function ComponenteAgregarProducto() {
  const token = localStorage.getItem('token');
  const [formReset, setFormReset] = useState(false);

  const [categoriasData, setCategoriasData] = useState([]);
  const [imagenPrincipal, setImagenPrincipal] = useState('');

  const [idCategoria, setIdCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const [archivos, setArchivos] = useState(null);

  const data = {
    category_id: idCategoria,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio
  };

  const valores = Object.values(data).every((valor) => !!valor);

  useEffect(() => {
    // Realiza la solicitud para obtener los datos de categorías
    fetch('http://serverreyes.ddns.net:8000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategoriasData(data))
      .catch((error) => console.error('Error al obtener datos de categorías:', error));
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagenURL = URL.createObjectURL(file);
      setImagenPrincipal(file);
      document.getElementById('imagen').src = imagenURL;
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleIdCategoriaChange = (event) => {
    setIdCategoria(event.target.value);
  };

  const handleArvhivosChange = (event) => {
    const datos = event.target.files;
    const almacenar = [];
    for (let i = 0; i < datos.length; i++) {
      almacenar.push(datos[i]);
    }
    setArchivos(almacenar);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (valores & (imagenPrincipal != '') & (archivos != null)) {
      try {
        const response = await fetch('http://serverreyes.ddns.net:8000/api/products', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          // Operación exitosa, restablecer el formulario
          const respuesta = await response.json();
          const productoId = respuesta.id;

          const formData = new FormData();
          formData.append('principal', imagenPrincipal);
          archivos.forEach((archivo) => formData.append('images[]', archivo));
          formData.append('product_id', productoId);

          const response2 = await fetch('http://serverreyes.ddns.net:8000/api/products/images', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
            body: formData,
          });
          if (response2.ok) {
            setFormReset(true);
            console.log('Acciones realizadas correctamente');
          }
          else {
            const respuesta2 = await response2.json();
            console.log('respuesta', respuesta2)
            console.error('Error al insertar la categoría');
          }
        } else {
          // Manejar el caso en que la inserción no sea exitosa
          console.error('Error al insertar el producto');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };


  useEffect(() => {
    // Manejar el reset del formulario
    if (formReset) {
      setIdCategoria('');
      setDescripcion('');
      setNombre('');
      setPrecio('');
      setImagenPrincipal('');
      setArchivos(null);
      document.getElementById('imagen').src = 'https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png';
      setFormReset(false);
    }
  }, [formReset]);


  return (
    <ComponenteLayout Titulo='Registro'>
      <div class='AgregarP_principal'>
        <div class='contenedor'>
          <div class='AgregarP_registro'>
            <h3>REGISTRO DE PRODUCTOS</h3>
            <div class='AgregarP_infoR'>
              <p>Producto:</p> <input onChange={handleNombreChange} type='text' placeholder='Introduce el nombre del producto'></input>
              <p>Precio:</p> <input onChange={handlePrecioChange} type='number' placeholder='Introduce el precio'></input>
              <p>Descripccion:</p><textarea onChange={handleDescripcionChange} name="Descripccion" id="Descripccion"></textarea>
              <label for="file-input" class="custom-file-upload_AgregarProducto"></label>
              <input type="file" id="file-input" class="hidden-file-input" onChange={handleFileChange} />
              <img id='imagen' src='https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png'></img>
              <p>Categoria:</p> <select value={idCategoria} onChange={handleIdCategoriaChange} placeholder='Categoria'>
                <option value="" disabled>Selecciona una categoría</option>
                {categoriasData.map((categoria) => (
                  <option value={categoria.id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
              <p>Conjunto de Imagenes:</p>
              <input onChange={handleArvhivosChange} type="file" multiple accept='image/*' />
            </div>
            <button onClick={handleSubmit}>Registrar</button>
          </div>
        </div>
      </div>
    </ComponenteLayout>
  );
}




