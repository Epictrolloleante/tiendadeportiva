import React from 'react'
import Auth from './auth';
{/*
function register() {
  const data = {
    name: 'John Doe',
    email: 'user@example.com',
    password: 'password123',
    password_confirmation: 'password123', 
  };

  fetch('http://serverreyes.ddns.net:8000/api/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta del servidor aquí (por ejemplo, muestra un mensaje de éxito)
      console.log('Registro exitoso', data);
    })
    .catch(error => {
      // Maneja errores aquí (por ejemplo, muestra un mensaje de error)
      console.error('Error en el registro', error);
    });
}*/}
{/*
function login() {
  const data = {
    name: 'John Doe',
    email: 'user@example.com',
    password: 'password123',
    password_confirmation: 'password123', 
  };

  fetch('http://serverreyes.ddns.net:8000/api/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta del servidor aquí (por ejemplo, muestra un mensaje de éxito)
      console.log('Registro exitoso', data);
    })
    .catch(error => {
      // Maneja errores aquí (por ejemplo, muestra un mensaje de error)
      console.error('Error en el registro', error);
    });
}*/}

function pagina(){
  if(Auth()) {
    console.log(Auth());
  return(
    <div>
      <h1>ESTA AUTENTICADO</h1>
    </div>
  );
}else{
  alert("Esta pagina solo puede ser accesada si esta logeado");
  window.location.href = '/';
}
}

export default pagina;

