import React from 'react'
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
}

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
}
export default function fsdfsdf() {
  return (
    <div>
      {register()}


    </div>


  )
}
