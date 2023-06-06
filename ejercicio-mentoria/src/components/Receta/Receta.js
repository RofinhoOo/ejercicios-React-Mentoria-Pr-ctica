import './Receta.css';

export function Receta(props){

    return(
        <div className="receta">
            <div className="receta-cabecera">
              <div className="receta-imagen">
               <img src={props.image} alt="Imagen de la receta"/>
              </div>
              <div className="receta-texto">
                <h1>{props.title}</h1>
                <p>Dificultad: {props.difficulty}</p>
                <p>Tiempo: {props.timeCoock}</p>
               
            
          
            <div className="receta-ingredientes">
                <ol>
                    <li>Ingredientes: {props.ingredients} </li>
                    
                </ol>
            </div>

            <div className="receta-pasos">
                <ol>
                <li>Pasos: {props.steps} </li>
                </ol>
            </div>
            </div>
            </div>
            

        </div>

    );
}