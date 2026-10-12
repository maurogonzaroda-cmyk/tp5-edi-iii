
import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          Esto es lo que dicen nuestros alumnos
          sobre freeCodeCamp:
        </h1>

        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Tuve muchas dificultades para aprender JavaScript. Sin embargo, freeCodeCamp me ayudó a mejorar mis habilidades y avanzar en mi formación como desarrollador."
        />

        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada al mundo del desarrollo de software. Su plan de estudios me permitió mejorar mis conocimientos y prepararme para mi primer trabajo."
        />

        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="El curso de freeCodeCamp me ayudó a comprender mejor JavaScript y a acercarme a mis objetivos profesionales."
        />
      </div>
    </div>
  );
}

export default App;
