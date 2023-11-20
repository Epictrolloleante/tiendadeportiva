import React, { useEffect, useState } from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/Productos.css';
import { useParams } from 'react-router-dom';

export default function Productos(props) {

    const { categoriaID } = useParams();
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
                            <img src={'http://serverreyes.ddns.net:8000/storage/imagescat/'+obtenerImagen(producto.id)} alt='a' />
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
