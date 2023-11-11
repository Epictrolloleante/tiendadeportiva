import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from './auth';
import styles from '../css/ComponenteDireccion.css';
import ComponenteLayout from './ComponenteLayout';


const register = (data) => {
    return fetch('http://serverreyes.ddns.net:8000/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


export default function ComponenteDireccion() {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        celular: '',
        apellidoP: '',
        apellidoM: '',
        usuario: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        register(formData).then((data) => {
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


    return (
        <ComponenteLayout Titulo='Dirección'>
            <div class='Direccionprincipal'>
                <div class='Direccioncontenedor'>
                    <div class='Direcciondireccion'>
                        <h3>DIRECCIÓN</h3>
                        <div class='Direccioninfo'>
                            <p>Calle:</p> <input type='text' placeholder='Introduce tu calle'></input> <p>Número:</p> <input type='number' placeholder='Introduce tu número'></input>
                            <p>Colonia:</p> <input type='text' placeholder='Introduce tu colonia'></input> <p>Localidad:</p> <input type='text' placeholder='Introduce tu localidad'></input>
                            <p>Municipio:</p> <input type='text' placeholder='Introduce tu municipio'></input> <p>Código Postal:</p> <input type='number' placeholder='Introduce tu código'></input>
                        </div>
                        <button>Registrar</button>
                    </div>
                </div>
            </div>
        </ComponenteLayout>
    )
}
