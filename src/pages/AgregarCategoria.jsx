import React, { useEffect } from 'react';

import ComponenteLayout from './ComponenteLayout';
import styles from '../css/AgregarCategoria.css';

export default function AgregarCategoria() {
    
    useEffect(() => {
        const file = document.getElementById('file-input');
        const img = document.getElementById('imagen');
        const defaultFile = 'https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png';
    
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
        <ComponenteLayout Titulo='Categoria'>
            <div className='fondoP'>
                <div className='contenedor'>
                    <div className='registro'>
                        <h3>REGISTRO DE CATEGORIAS</h3>
                        <div className='infoR'>
                            <p>Categoria:</p> <input type='text' placeholder='Introduce el nombre de la categoria'></input> 
                            <p>Alt Imagen:</p> <input type='text' placeholder='Introduce el nombre de la imagen'></input>
                            <label for="file-input" class="custom-file-upload"></label> <input type="file" id="file-input" class="hidden-file-input" /> <img id='imagen' src='https://ingeniosas.org/wp-content/plugins/bb-plugin/img/no-image.png'></img>
                        </div>
                        <button>Registrar</button>
                    </div>
                </div>
            </div>
        </ComponenteLayout>
    )
}