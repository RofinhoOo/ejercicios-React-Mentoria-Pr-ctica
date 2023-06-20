

import '../Home.css';
import { Receta } from '../components/Receta/Receta';
import { recetas } from '../data/recetas';

function Home() {
  return (
    <div className="App">
      <h1>Recetas gastronómicas</h1>
      {recetas.map((receta)=>{
        return(
        
        <Receta 
        
        key={receta.ID}
        ID={receta.ID}
        image={receta.image}
        title={receta.title}
        difficulty={receta.difficulty}
        timeCoock={receta.timeCoock}
        ingredients={receta.ingredients}
        steps={receta.steps}
      />)
      })}

    </div>
  );
}

export default Home;
