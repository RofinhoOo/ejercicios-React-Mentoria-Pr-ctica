
import './App.css';
import { Boton } from './components/Boton';
import Window from './components/Window';
import BotonClear from './components/BotonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{

   setInput(input + val);

  };

  return (
    <div className='App'>
       <div className='contenedor-calculadora'>
          <Window input={input} />
          <div className="fila">
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className="fila">
          <BotonClear manejarClick={agregarInput}>Clear</BotonClear>
          </div>

       </div>
    </div>
  );
}

export default App;
