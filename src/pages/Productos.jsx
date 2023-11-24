import React, { useEffect, useState } from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/Productos.css';
import { useParams } from 'react-router-dom';/*Importacion para el useParams*/

export default function Productos(props) {

    const { categoriaID } = useParams();/*Se ocupa para extraer parametros de la url la 
                                            variable dentro debe ser llamada como esta puesto en el
                                            App.js en el link que se le asigno*/
    const [productosData, setProductosData] = useState([]);
    const [imagenData, setImagenData] = useState([]);    

    console.log(categoriaID);
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
                    /*Al comparar con algo la variable se debe de ocupar 2 = porque si no genera errores*/
    : productosData;

    const obtenerImagen = (idProducto) => {
        const imagen = imagenData.find((img) => img.product_id === idProducto && img.principal);

        return imagen ? imagen.nombre : '';
    };

    console.log(productosFiltrados);

    return (
        <ComponenteLayout Titulo="Productos">
            <div className="Productos_Principal">
                <div className='Productos_contenedor'>
                    {productosFiltrados.map((producto, index) => (
                        <div className="Productos_product" key={index}>
                            <img src={'http://serverreyes.ddns.net:8000/storage/images/'+obtenerImagen(producto.id)} alt='a' />
                            <div className="Productos_info">
                                <h5>{producto.nombre}</h5>
                                <p>{producto.descripcion}</p>
                                <p>${producto.precio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ComponenteLayout>
    )
}
