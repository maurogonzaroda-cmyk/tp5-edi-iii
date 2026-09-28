import "./App.css";
import Testimonio from "./componentes/Testimonio";

import shawn from "./imagenes/Testimonio-shawn.jpg";
import sarah from "./imagenes/Testimonio-sarah.jpg";
import emma from "./imagenes/Testimonio-emma.jpg";

function App() {
  return (
    <div className="App">

      <h1>
        Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
      </h1>

      <Testimonio
        imagen={shawn}
        nombre="Shawn Wang"
        pais="Singapur"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Me encanta aprender y compartir conocimientos con la comunidad."
      />

      <Testimonio
        imagen={sarah}
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Software"
        empresa="ChatDesk"
        testimonio="Aprender programación cambió mi forma de pensar y trabajar."
      />

      <Testimonio
        imagen={emma}
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="La comunidad y el aprendizaje continuo son fundamentales."
      />

    </div>
  );
}

export default App;