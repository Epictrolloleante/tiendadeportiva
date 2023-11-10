import React from 'react'
import styles from '../css/ComponenteTallas.css';


export default function ComponenteTallas() {
  return (
    <div class='principal'>
    <div class='contenedor'>
        <div class='registro'>
            <h3 class='titulo'>REGISTRO DE TALLAS</h3>
            <div class='info'>
                <p>Talla:</p> <input type='text' placeholder='Agrega Talla'></input> 
              
            </div>
            <button>Agregar</button>
        </div>
    </div>
</div>
  )
}
