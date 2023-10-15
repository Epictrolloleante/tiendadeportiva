import axios from 'axios';

const checkAuthorization = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, no estás autenticado
    return Promise.resolve(false);
  }

  return fetch('http://serverreyes.ddns.net:8000/api/user-only', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.text())
    .then((text) => {
      // Maneja la respuesta del servidor aquí (por ejemplo, verifica si el inicio de sesión fue exitoso)
      console.log('Respuesta del servidor:', text);

      if (text === 'Autenticado') {
        console.log("Autenticación correcta");
        console.log(token);
        return true;
      } else {
        // Muestra un mensaje de error si el inicio de sesión falló
        alert('Inicio de sesión fallido. Verifica tus credenciales.');
        return false;
      }
    })
    .catch((error) => {
      // Maneja errores aquí (por ejemplo, muestra un mensaje de error)
      console.log('Error en la solicitud:', error);
      alert('Autenticación fallida, hubo un error');
      return false;
    });
};

export default checkAuthorization;
