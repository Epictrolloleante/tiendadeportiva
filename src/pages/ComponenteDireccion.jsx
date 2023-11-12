import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from './auth';
import styles from '../css/ComponenteDireccion.css';
import ComponenteLayout from './ComponenteLayout';


const register = (data) => {
    return fetch('http://serverreyes.ddns.net:8000/api/addresses', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw error;
                });
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
            throw error;
        });
}


export default function ComponenteDireccion() {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [formData, setFormData] = useState({
        calle: '',
        numeroCalle: '',
        colonia: '',
        ciudad: '',
        estado: '',
        codigoPostal: '',
        referencia: '',
        telefono: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        register(formData)
            .then((data) => {
                alert("Direccion creada correctamente");
                window.location.href = '/';
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    useEffect(() => {
        Auth()
            .then((isAuthenticated) => {
                setIsAuthenticated(isAuthenticated);
            })
            .catch((error) => {
                console.log('Error en la solicitud:', error);
                setIsAuthenticated(false);
            });
    }, []);

    if (isAuthenticated === false) {
        alert('No está autorizado');
        return <Navigate to="/" />;
    }

    else {
        return (
            <ComponenteLayout Titulo='Dirección'>
                <div class='Direccionprincipal'>
                    <div class='Direccioncontenedor'>
                        <div class='Direcciondireccion'>
                            <h3>DIRECCIÓN</h3>
                            <div class='Direccioninfo'>
                                <form onSubmit={handleSubmit}>
                                    <p>Calle:</p> <input type='text' name='calle' value={formData.calle} onChange={handleInputChange} placeholder='Introduce tu calle'></input>
                                    <p>Número:</p> <input type='number' name='numeroCalle' value={formData.numeroCalle} onChange={handleInputChange} placeholder='Introduce tu número'></input>
                                    <p>Colonia:</p> <input type='text' name='colonia' value={formData.colonia} onChange={handleInputChange} placeholder='Introduce tu colonia'></input>
                                    <p>Ciudad:</p> <input type='text' name='ciudad' value={formData.ciudad} onChange={handleInputChange} placeholder='Introduce tu Ciudad'></input>
                                    <p>Estado:</p> <input type='text' name='estado' value={formData.estado} onChange={handleInputChange} placeholder='Introduce tu estado'></input>
                                    <p>Código Postal:</p> <input type='number' name='codigoPostal' value={formData.codigoPostal} onChange={handleInputChange} placeholder='Introduce tu código postal'></input>
                                    <p>Referencia:</p> <input type='text' name='referencia' value={formData.referencia} onChange={handleInputChange} placeholder='Introduce la referencia de tu domicilio'></input>
                                    <p>Telefono:</p> <input type='number' name='telefono' value={formData.telefono} onChange={handleInputChange} placeholder='Introduce tu numero telefonico'></input>
                                    <button type='submit'>Guardar direccion</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponenteLayout>
        )

    }

}
