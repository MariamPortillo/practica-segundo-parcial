import React from "react";
import '../styles/Titulo.css'

function Titulo(props) {
    return (
      <div className="contentTitulo">
        <h1 className="card-title">{props.title}</h1>
      </div>
    );
  }
  
  export default Titulo;
  