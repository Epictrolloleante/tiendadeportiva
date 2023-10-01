import React from 'react'
import stylees from '../css/Hombres.css'


import imgSelecciones from '../img/Masculino/seleccion.jpg';
import imgInternacional from '../img/Masculino/internacional.png';
import imgNacional from '../img/Masculino/nacional.jpg';
export default function 
() {
  return (
    <div >
        <div class="contenedorH">
            <div class="card">
                <img src={imgNacional} alt="Imagen Seleccion Nacional" />
                <br />
                <button>Nacional</button>
                <div>
                    <ul>
                        <li>America</li>
                        <li>Atlas</li>
                        <li>Chivas</li>
                        <li>Cruz Azul</li>
                        <li>Pumas</li>
                        <li>Tigres</li>
                        <li>Toluca</li>
                        <li>Xolos</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <img src={imgInternacional} alt="Imagen Seleccion Internacional" />
                <br />
                <button>Internacional</button>
                <div>
                    <ul>
                        <li>Arsenal</li>
                        <li>Atletico de Madrid</li>
                        <li>Barcelona</li>
                        <li>Betis</li>
                        <li>Real Madrid</li>
                        <li>Chealse</li>
                        <li>Inter</li>
                        <li>Juventus</li>
                        <li>Liverpool</li>
                        <li>Manchester</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <img src={imgSelecciones} alt="Imagen de la Copa del Mundo" />
                <br />
                <button>Selecciones</button>
                <div>
                    <ul>
                        <li>Alemania</li>
                        <li>Argentina</li>
                        <li>Brasil</li>
                        <li>Holanda</li>
                        <li>Italia</li>
                        <li>Japon</li>
                        <li>Mexico</li>
                        
                    </ul>
                </div>
            </div>

        </div>

    </div>
  )
}
