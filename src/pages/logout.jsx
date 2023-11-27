
const Logout = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, no estás autenticado
    return Promise.resolve(false);
  }

  fetch('http://serverreyes.ddns.net:8000/api/logout', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.text())
    .then((text) => {
      if (text === 'Sesion Cerrada') {
        console.log("Sesion Cerrada");
        window.location.href = '/';                        
      } else {
        window.location.href = '/';
      }
    })
    .catch((error) => {
      console.log('Error en la solicitud:', error);
      return false;
    });
};

export default Logout;
