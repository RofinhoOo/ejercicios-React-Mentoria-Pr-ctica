
import '../hoja-de-estilos/App.css';
import { Tarea } from '../components/Tarea';
import { TareaForm } from '../components/TareaForm';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea 
               texto="Nuevas Tareas"/>
         <TareaForm />
      </div>
    </div>
  );
}

export default App;
