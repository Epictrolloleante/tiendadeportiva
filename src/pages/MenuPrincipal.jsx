import React from 'react'
import stylees from '../css/MenuPrincipal.css';

import imgGuantes from '../img/menuprincipal/guantes 1.png';
import imgPlayeras from '../img/menuprincipal/playeras 1.png';
import imgTacos from '../img/menuprincipal/tacones 1.png';
import imgPortero from '../img/menuprincipal/portero1.png';
import imgBalon from '../img/menuprincipal/balon1.png';
import imgCalzado from '../img/menuprincipal/calzado1.png';
import imgHombre from '../img/menuprincipal/hombre1.png';
import imgFemenil from '../img/menuprincipal/femenil_1.png';
import imgInfantil from '../img/menuprincipal/infantil1.png';
import ComponenteLayout from './ComponenteLayout';

export default function MenuPrincipal() {
  return (
    <ComponenteLayout Titulo="Home">
    <div class="principal">
           <div class="contenedor">
             <div class="card">
             <img src={imgGuantes} alt="Imagen de guantes" />
             <br />
             <button>Guantes</button>
             </div>

             <div class="card">
             <img src={imgPlayeras} alt="Imagen de Playeras" />
             <br />
             <button>Playeras</button>
             </div>
            
             <div class="card">
             <img src={imgTacos} alt="Imagen de Playeras" />
             <br />
             <button>Tacos De Futbol</button>
             </div>
           </div>

           <br />

           <div class="contenedor">
             <div class="card">
             <img src={imgHombre} alt="Imagen de guantes" />
             <br />
             <button>Hombres</button>
             </div>

             <div class="card">
             <img src={imgFemenil} alt="Imagen de Playeras" />
             <br />
             <button>Femenil</button>
             </div>
            
             <div class="card">
             <img src={imgInfantil} alt="Imagen de Playeras" />
             <br />
             <button>Infantil</button>
             </div>
           </div>

              <br />

           <div class="contenedor">
             <div class="card">
             <img src={imgPortero} alt="Imagen de guantes" />
             <br />
             <button>Uniforme de Portero</button>
             </div>

             <div class="card">
             <img src={imgCalzado} alt="Imagen de Playeras" />
             <br />
             <button>Calzado</button>
             </div>
            
             <div class="card">
             <img src={imgBalon} alt="Imagen de Playeras" />
             <br />
             <button>Balones</button>
             </div>
           </div>

        </div>
        
        </ComponenteLayout> 
  )
}

