import React from 'react'
import styles from '../css/ComponenteLogin.css';
import { Link } from 'react-router-dom';
import ComponenteLayout from './ComponenteLayout'
{/* Comentario */ }

export default function login() {

    return (
        <ComponenteLayout Titulo="Inicio de sesion">
            <div class="principal">



                <div class="contenedor">
                    <div class="google">
                        <p>Iniciar sesión con google</p>
                        <button></button>
                    </div>

                    <hr width="0" size="500" color="black"></hr>

                    <div class="iniciar">
                        <p>Login</p>
                        <div class="datosIniciar">
                            <p>Usuario</p>
                            <input type="text" class="campo" placeholder="Ingresa Usuario"></input>
                            <p>Contraseña</p>
                            <input type="password" class="campo" placeholder="Ingresa Contraseña"></input>
                        </div>
                        <Link to={"/"}> <button>Entrar</button></Link>
                    </div>
                </div>

            </div>
        </ComponenteLayout>







        /*
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
            </div>*/
    )
}


