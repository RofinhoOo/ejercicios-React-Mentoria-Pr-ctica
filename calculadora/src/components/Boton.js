import React from 'react';
import '../hojas-de-estilo/Boton.css';

export function Boton({ children, manejarClick }) {

  const esOperador = valor => {
     return isNaN(valor) && (valor != '.') && (valor != '=' );
  };

    return(
        <div className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
             onClick={() => manejarClick(children)}>
          { children } 
        </div>
    )


}