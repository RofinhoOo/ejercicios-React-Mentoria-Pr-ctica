import React from 'react';
import '../hoja-de-estilos/Tarea.css';
import { AiFillCloseCircle } from "react-icons/ai";

export function Tarea({ texto, completada }) {

  return(
     <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
       <div className='tarea-texto'>
          {texto}
       </div>
      <div className='tarea-contenedor-iconos'>
        <AiFillCloseCircle className='tarea-icono'/>
      </div> 

     </div>
  );

};