import React from 'react'

import styles from '../css/ComponenteRegistro.css';
import ComponenteLayout from './ComponenteLayout';

export default function ComponenteRegistro() {
  return (
    <ComponenteLayout Titulo='Registro'>
        <div class='principal'>
            <div class='contenedor'>
                <div class='registro'>
                    <h3>REGISTRO</h3>
                    <div class='info'>
                        <p>Nombre:</p> <input type='text' placeholder='Introduce tu nombre'></input> <p>Celular:</p> <input type='tel' placeholder='Introduce tu celular'></input>
                        <p>Apellido Paterno:</p> <input type='text' placeholder='Introduce tu apellido paterno'></input> <p>Correo:</p> <input type='email' placeholder='Introduce tu correo'></input>
                        <p>Apellido Materno:</p> <input type='text' placeholder='Introduce tu apellido materno'></input> <p>Usuario:</p> <input type='text' placeholder='Introduce un usuario'></input>
                        <p>Dirección:</p> <input type='text' placeholder='Introduce tu dirección'></input> <p>Contraseña:</p> <input type='password' placeholder='Introduce una contraseña'></input>
                    </div>
                    <button>Registrar</button>
                </div>
            </div>
        </div>
    </ComponenteLayout>
  )
}
