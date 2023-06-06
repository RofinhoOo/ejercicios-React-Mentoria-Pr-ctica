
// App.js
import './App.css';
import { Receta } from './components/Receta/Receta';
import { recetas } from './data/recetas';

function App() {
  return (
    <div className="App">
      <h1>Recetas gastronómicas</h1>
      <Receta
        ID={recetas[0].ID}
        image={recetas[0].image}
        title={recetas[0].title}
        difficulty={recetas[0].difficulty}
        timeCoock={recetas[0].timeCoock}
        ingredients={recetas[0].ingredients}
        steps={recetas[0].steps}
      />

      <Receta
        ID={recetas[1].ID}
        image={recetas[1].image}
        title={recetas[1].title}
        difficulty={recetas[1].difficulty}
        timeCoock={recetas[1].timeCoock}
        ingredients={recetas[1].ingredients}
        steps={recetas[1].steps}
      />

      <Receta
        ID={recetas[2].ID}
        image={recetas[2].image}
        title={recetas[2].title}
        difficulty={recetas[2].difficulty}
        timeCoock={recetas[2].timeCoock}
        ingredients={recetas[2].ingredients}
        steps={recetas[2].steps}
      />
    </div>
  );
}

export default App;
