import React from "react";
import '../hoja-de-estilos/TareaForm.css';

export function TareaForm() {
    
    return(

         <form className="tarea-formulario">
            <input  className="tarea-input"
                    type="text" 
                    placeholder="Escribe una tarea"
                    name="text"
            />

            <button className="tarea-boton">Agregar Tarea</button>

         </form>

    );
};