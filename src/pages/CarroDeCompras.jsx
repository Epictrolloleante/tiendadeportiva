import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/CarroDeCompras.css';
import ComponenteLayout from './ComponenteLayout';

export default function CarroDeCompras() {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();  // Llama a la función fetchData para obtener datos iniciales
  }, []);

  const fetchData = () => {
    // Realiza una solicitud GET a la API para obtener los datos iniciales
    axios.get('http://serverreyes.ddns.net:8000/api/carritoUser', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      setData(response.data.items);
      setTotal(response.data.total); // Actualiza el estado del total
    })
    .catch(error => console.error('Error al obtener datos:', error));
  };

  const CarritoDelete = async (Id) => {
    try {
      // Hacer la solicitud DELETE al servidor
      await axios.delete(
        `http://serverreyes.ddns.net:8000/api/carrito/${Id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      // Después de eliminar con éxito, vuelve a obtener los datos
      fetchData();
      
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      
    }
  };

  const vaciar = async () => {
    try {
      // Hacer la solicitud DELETE al servidor
      await axios.delete(
        `http://serverreyes.ddns.net:8000/api/borrarCarritoUser`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      // Después de eliminar con éxito, vuelve a obtener los datos
      fetchData();
      
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      
    }
  };

  return (
    <ComponenteLayout Titulo="Productos">
      <div className="carro-de-compras-container">
        {data.map((carrito) => (
          <div key={carrito.CarritoId} className="producto-carrito">
            <div className="imagen-container">
              <img src={`http://serverreyes.ddns.net:8000/storage/images/${carrito.imagenNombre}`} alt={carrito.nombreProducto} />
            </div>
            <div className="info-container">
              <p className="nombre-producto">{carrito.nombreProducto}</p>
              <p className="descripcion-producto">{carrito.descripcionProducto}</p>
              <p className="cantidad">Cantidad: {carrito.cantidad}</p>
              <p className="precio">Precio: ${carrito.precioProducto}</p>
            </div>
            <div className="buton-container">
              <button className='botonElimina' onClick={() => CarritoDelete(carrito.CarritoId)}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div className='footer'>
        <p>Total------------------${total}</p>
       <div className='botones'>
       <button>Continuar Compra</button> 
       <button onClick={()=> vaciar()}>Vaciar Carrito</button>
       </div>
      </div>
    </ComponenteLayout>
  );
}
