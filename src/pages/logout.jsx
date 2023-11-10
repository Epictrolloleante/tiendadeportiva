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
      if (text === 'Autenticado') {
        console.log("Autenticación exitosa");
        return true;
      } else {
        console.log("Autenticación fallida");
        return false;
      }
    })
    .catch((error) => {
      console.log('Error en la solicitud:', error);
      return false;
    });
};

export default checkAuthorization;
