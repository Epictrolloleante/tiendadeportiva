import React, { useEffect, useState } from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/Productos.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Productos(props) {
  const { categoriaID } = useParams();
  const [productosData, setProductosData] = useState([]);
  const [imagenData, setImagenData] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    fetch('http://serverreyes.ddns.net:8000/api/products')
      .then((response) => response.json())
      .then((data) => setProductosData(data))
      .catch((error) => console.error('Error al obtener datos de categorías:', error));

    fetch('http://serverreyes.ddns.net:8000/api/images')
      .then((response) => response.json())
      .then((data) => setImagenData(data))
      .catch((error) => console.error('Error al obtener datos de categorías:', error));
  }, []);

  const productosFiltrados = categoriaID
    ? productosData.filter((producto) => producto.category_id == categoriaID)
    : productosData;

  const obtenerImagen = (idProducto) => {
    const imagen = imagenData.find((img) => img.product_id === idProducto && img.principal);
    return imagen ? imagen.nombre : '';
  };

  const AgregarCarrito = async (idProducto) => {
    try {
      const carritoResponse = await axios.get('http://serverreyes.ddns.net:8000/api/carritoUser', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const productoEnCarrito = carritoResponse.data.items.find(item => item.VarianteId === idProducto);

      if (productoEnCarrito) {
        const response = await axios.put(
          `http://serverreyes.ddns.net:8000/api/carrito/${productoEnCarrito.CarritoId}`,
          { cantidad: productoEnCarrito.cantidad + 1 },
          { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } }
        );
      } else {
        const response = await axios.post(
          `http://serverreyes.ddns.net:8000/api/carrito`,
          { VarianteId: idProducto, cantidad: 1 },
          { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
        );
      }

      // Marcar el botón como clicado
      setClickedButtons((prevButtons) => [...prevButtons, idProducto]);

      // Restaurar el estado del botón después de 3 segundos
      setTimeout(() => {
        setClickedButtons((prevButtons) => prevButtons.filter((buttonId) => buttonId !== idProducto));
      }, 1000);

    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        alert('Error: No se recibió respuesta del servidor');
      } else {
        alert('Error al agregar el producto al carrito');
      }
    }
  };

  return (
    <ComponenteLayout Titulo="Productos">
      <div className="Productos_Principal">
        <div className='Productos_contenedor'>
          {productosFiltrados.map((producto) => (
            <div className="Productos_product" key={producto.id}>
              <img src={'http://serverreyes.ddns.net:8000/storage/images/'+obtenerImagen(producto.id)} alt='a' />
              <div className="Productos_info">
                <h5>{producto.nombre}</h5>
                <p>{producto.descripcion}</p>
                <p>${producto.precio}</p>
                <button
                  onClick={() => AgregarCarrito(producto.id)}
                  style={{ backgroundColor: clickedButtons.includes(producto.id) ? '#008f4c' : '#62929E' }}
                >
                  {clickedButtons.includes(producto.id) ? 'Agregado' : 'Agregar al Carrito'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponenteLayout>
  );
}
