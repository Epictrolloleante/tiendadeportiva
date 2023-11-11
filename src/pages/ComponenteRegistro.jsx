import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from './Auth.jsx';
import styles from '../css/ComponenteRegistro.css';
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




export default function ComponenteRegistro() {
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
            if (data.user && data.access_token) {
                alert('Usuario creado correctamente');
                window.location.href = '/';
            } else {
                alert('Error al crear usuario');
            }
        });
    };

    
    return (
        <ComponenteLayout Titulo='Registro'>
            <div class='Registroprincipal' className={styles.myClass}>
                <div class='Registrocontenedor'>
                    <div class='Registroregistro'>
                        <h3>REGISTRO</h3>
                        <div class='Registroinfo'>
                            <form onSubmit={handleSubmit}>
                                <p>Nombre:</p> <input type='text' name='name' value={formData.name} onChange={handleInputChange} placeholder='Introduce tu nombre' ></input> <p>Celular:</p> <input type='tel' name='celular'value={formData.celular} onChange={handleInputChange} placeholder='Introduce tu celular'></input>
                                <p>Apellido Paterno:</p> <input type='text' name='apellidoP' value={formData.apellidoP} onChange={handleInputChange} placeholder='Introduce tu apellido paterno'></input> <p>Correo:</p> <input type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Introduce tu correo'></input>
                                <p>Apellido Materno:</p> <input type='text' name='apellidoM' value={formData.epellidoM} onChange={handleInputChange} placeholder='Introduce tu apellido materno'></input> <p>Usuario:</p> <input type='text' name='usuario' value={formData.usuario} onChange={handleInputChange} placeholder='Introduce un usuario'></input>
                                <p>Contraseña:</p> <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Introduce una contraseña'></input>
                                <button type='submit'>Registrarse</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ComponenteLayout>
    )
}
