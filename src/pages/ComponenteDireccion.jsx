import React from 'react'

import styles from '../css/ComponenteDireccion.css';
import ComponenteLayout from './ComponenteLayout';

export default function ComponenteDireccion() {
  return (
    <ComponenteLayout Titulo='Dirección'>
        <div class='principal'>
            <div class='contenedor'>
                <div class='direccion'>
                    <h3>DIRECCIÓN</h3>
                    <div class='info'>
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
