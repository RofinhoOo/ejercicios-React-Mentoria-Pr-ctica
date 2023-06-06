import './Receta.css';

export function Receta(){

    return(
        <div className="receta">
            <div className="receta-cabecera">
              <div className="receta-imagen">
               <img src="https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg"/>
              </div>
              <div className="receta-texto">
                <h1>Receta Lasaña</h1>
                <p>Preparación: 1 hora</p>
                <p>Dificultad: medio</p>
               </div>
            </div>
            
            <div className="receta-ingredientes">
                <ol>
                    <li>Carne picada</li>
                    <li>Tomate</li>
                    <li>Pasta</li>
                    <li>Verduras</li>
                </ol>
            </div>

            <div className="receta-pasos">
                <ol>
                  <li>Cocinar la verdura</li>
                  <li>Añadir la carne</li>
                  <li>Agregar el tomate y acabar de cocinar</li>
                </ol>
            </div>
            

        </div>

    );
}