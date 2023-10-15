import React from 'react'
import Auth from './auth';


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

