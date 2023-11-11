import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthAdmin from './authAdmin';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/ComponenteAdminCategoria.css';
import { Link } from 'react-router-dom';

const DataTable = () => {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        // Realiza una solicitud GET a la API para obtener los datos iniciales
        axios.get('http://serverreyes.ddns.net:8000/api/categories')
            .then(response => setData(response.data))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);

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

    const handleDelete = (id) => {
        // Realiza una solicitud DELETE a la API para borrar un elemento
        axios.delete(`http://serverreyes.ddns.net:8000/api/categories/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(() => {
                const updatedData = data.filter((item) => item.id !== id);
                setData(updatedData);
            })
            .catch(error => console.error('Error al borrar elemento:', error));
    };

    const handleModify = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleSaveChanges = async (modifiedItem) => {
        try {
            // Realiza una solicitud POST para subir la imagen (asumiendo que la imagen es un tipo de archivo)
            const formData = new FormData();

            // El siguiente código asume que hay una ruta en tu API para subir imágenes.
            if (modifiedItem.imagen && typeof modifiedItem.imagen !== 'string') {
                console.log(modifiedItem.imagen);
                formData.append('imagen', modifiedItem.imagen);

                // Realiza la solicitud POST para subir la imagen
                const uploadResponse = await axios.post(`http://serverreyes.ddns.net:8000/api/categories/${modifiedItem.id}/updateimg`, formData, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                // Actualiza el objeto modificadoItem con la URL de la imagen subida
                modifiedItem.imagen = uploadResponse.data.imageName;
            }

            // Realiza una solicitud PUT a la API para actualizar un elemento
            await axios.put(`http://serverreyes.ddns.net:8000/api/categories/${modifiedItem.id}`, modifiedItem, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            // Actualiza el estado local con los datos actualizados
            const updatedData = data.map((item) =>
                item.id === modifiedItem.id ? modifiedItem : item
            );
            setData(updatedData);
            setShowModal(false);
        } catch (error) {
            console.error('Error al actualizar elemento:', error);
        }
    };

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
            <ComponenteLayout Titulo='Categorias'>
                <div className="categoria_Principal">
                    <Link to={"/AgregarCategoria"}><button className='agregar'>Agregar Categoria</button></Link>
                    <div className='categoria_Contenedor'>

                        

                        <table className="categoria_tabla">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td>
                                            <img src={'http://serverreyes.ddns.net:8000/storage/imagescat/' + item.imagen} alt={item.altImagen}/>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                                                Borrar
                                            </button>{' '}
                                            <button className="btn btn-primary" onClick={() => handleModify(item)}>
                                                Modificar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <br/>

                        {showModal && (
                            <div className="modal" tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Modificar Categoria</h4>
                                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="formNombre">Nombre</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ingrese el nombre"
                                                        value={selectedItem?.nombre || ''}
                                                        onChange={(e) =>
                                                            setSelectedItem({ ...selectedItem, nombre: e.target.value })
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="formAltImagen">Alt Imagen</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ingrese el Alt Imagen"
                                                        value={selectedItem?.altImagen || ''}
                                                        onChange={(e) =>
                                                            setSelectedItem({ ...selectedItem, altImagen: e.target.value })
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="formImagen">Imagen</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={(e) =>
                                                            setSelectedItem({ ...selectedItem, imagen: e.target.files[0] })
                                                        }
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                                Cancelar
                                            </button>
                                            <button type="button" className="btn btn-primary" onClick={() => handleSaveChanges(selectedItem)}>
                                                Guardar Cambios
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        
                    </div>
                </div>
            </ComponenteLayout>
        );
};

export default DataTable;