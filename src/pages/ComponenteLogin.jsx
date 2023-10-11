import React, { useState } from 'react';
import styles from '../css/ComponenteLogin.css';
import { Link } from 'react-router-dom';
import ComponenteLayout from './ComponenteLayout'
{/* Comentario */ }

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    email: email,
    password: password,
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(data)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Aquí deberías enviar los datos de usuario y contraseña al servidor Laravel
    // utilizando una solicitud POST. Puedes usar la función "fetch" u otra librería
    // de solicitud HTTP como Axios.

    

    fetch('http://serverreyes.ddns.net:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta del servidor aquí (por ejemplo, verifica si el inicio de sesión fue exitoso)
        console.log('Respuesta del servidor:', data);

        // Redirige al usuario a otra página si el inicio de sesión fue exitoso
        if (data.message != 'Credenciales inválidas') {
          // Redirige al usuario a la página de inicio, por ejemplo.
          // Reemplaza '/inicio' con la ruta deseada.
          window.location.href = '/';
          const token = data['access_token'] // Obten el token de la respuesta
          localStorage.setItem('token', token);
          console.log(token);
        } else {
          // Muestra un mensaje de error si el inicio de sesión falló
          alert('Inicio de sesión fallido. Verifica tus credenciales.');
        }
      })
      .catch((error) => {
        // Maneja errores aquí (por ejemplo, muestra un mensaje de error)
        console.error('Error en la solicitud:', error);
      });
  };

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
                            <input type="text" class="campo" placeholder="Ingresa Usuario" value={email} onChange={handleEmailChange}></input>
                            <p>Contraseña</p>
                            <input type="password" class="campo" placeholder="Ingresa Contraseña" value={password} onChange={handlePasswordChange}></input>
                        </div>
                         <button onClick={handleSubmit}>Entrar</button>
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


