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
                <p>{props.difficulty}</p>
                <p>{props.timeCoock}</p>
               </div>
            </div>
            
            <div className="receta-ingredientes">
                <ol>
                    <li>{props.ingredients}: </li>
                    
                </ol>
            </div>

            <div className="receta-pasos">
                <ol>
                <li>{props.steps}: </li>
                </ol>
            </div>
            

        </div>

    );
}