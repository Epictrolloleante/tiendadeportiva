import axios from 'axios';

const checkAuthorization = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, no estás autenticado
    return false;
  }

  return axios
    .get('http://serverreyes.ddns.net/api/user-only', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // Si la solicitud es exitosa, estás autenticado
      console.log("Si esta autorizado: " + response)
      return true;
    })
    .catch((error) => {
      // Si la solicitud devuelve un error (por ejemplo, 401 No autorizado), no estás autenticado
      return false;
    });
};

export default checkAuthorization;