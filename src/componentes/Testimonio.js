import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="testimonio">
      <img
        className="imagen-testimonio"
        src={props.imagen}
        alt={props.nombre}
      />

      <div className="texto-testimonio">
        <p className="nombre">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>

        <p className="cargo">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        <p className="texto">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;