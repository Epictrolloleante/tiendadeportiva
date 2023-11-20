
import React, { useEffect } from 'react';
import styles from '../css/ComponenteAgregarProducto.css';
import ComponenteLayout from './ComponenteLayout';

export default function ComponenteAgregarProducto() {

    file.addEventListener('change', e => {
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          img.src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        img.src = defaultFile;
      }
    });
  }, []); // El segundo argumento vacío [] indica que se ejecutará una vez después del montaje

  return (
    <ComponenteLayout Titulo='Registro'>
    <div class='principal'>
    <div class='contenedor'>
        <div class='registro'>
            <h3>REGISTRO DE PRODUCTOS</h3>
            <div class='infoR'>
                <p>Producto:</p> <input type='text' placeholder='Introduce el nombre del producto'></input> <p>Precio:</p> <input type='number' placeholder='Introduce el precio'></input>
                <p>Descripccion:</p>  <textarea name="Descripccion" id="Descripccion"  ></textarea>  <label for="file-input" class="custom-file-upload"></label> <input type="file" id="file-input" class="hidden-file-input" /> <img id='imagen' src='https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png'></img>
                <p>Categoria:</p> <select placeholder='Categoria'> </select>
            </div>
            <button>Registrar</button>
        </div>
    </div>
</div>
</ComponenteLayout>
  );
}




