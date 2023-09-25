import React from 'react'
import styles from '../css/ComponenteLogin.css';
import { Link } from 'react-router-dom';

export default function login() {
    
    return (
        <div id="principal">
            <div id="login">
                <div id="google">
                    <p class="texto">Iniciar sesion con google</p>
                    <button id="botonlogin"></button>

                </div>
                <div id="credenciales">
                        <div>
                            <p id="textoGoogle" class="texto">LOGIN</p>
                        </div>
                        <div id="divInputs" >
                            <div id="divUsuario">
                                <label htmlFor='txtUsuario'>Usuario</label>
                                <input type="text" id="txtUsuario"></input>
                            </div>
                            
                            <div id="divPass">
                                <label htmlFor='txtPass'>Contraseña</label>
                                <input type="password" id="txtPass"></input>
                            </div>
                            
                        </div>
                        <div>
                            <Link to="/"><button >Entrar</button></Link>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}


