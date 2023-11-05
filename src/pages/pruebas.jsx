import React, { useState, useEffect } from 'react';
import Auth from './auth';

function Pagina() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Usar null para indicar "cargando"

  useEffect(() => {
    Auth()
      .then((isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
      })
      .catch((error) => {
        console.log('Error en la solicitud:', error);
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    // Si isAuthenticated es null, mostrar un indicador de carga
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  } else if (isAuthenticated) {
    // Si isAuthenticated es true, el usuario está autenticado
    return (
      <div>
        <h1>ESTÁ AUTENTICADO</h1>
      </div>
    );
  } else {
    // Si isAuthenticated es false, el usuario no está autenticado
    alert("Esta página solo puede ser accedida si está logeado");
    window.location.href = '/';
    return null; // O podrías renderizar un componente de acceso denegado
  }
}

export default Pagina;
