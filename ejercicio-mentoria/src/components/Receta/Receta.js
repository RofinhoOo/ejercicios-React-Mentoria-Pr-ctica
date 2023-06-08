import React from 'react';
import './Receta.css';

export function Receta({ image, title, difficulty, timeCoock, ingredients, steps }) {
  return (
    <div className="receta">
      <div className="receta-cabecera">
        <div className="receta-imagen">
          <img src={image} alt="Imagen de la receta" />
        </div>
        <div className="receta-texto">
          <h1>{title}</h1>
          <p>Dificultad: {difficulty}</p>
          <p>Tiempo: {timeCoock}</p>
        </div>
      </div>

      <div className="receta-ingredientes">
        <h2>Ingredientes:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="receta-pasos">
        <h2>Pasos:</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
