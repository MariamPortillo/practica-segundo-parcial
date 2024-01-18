import React, {useState} from "react";
import "../style/Boton.css";

function Boton({}){
    const [mostrar, setMostrar]=useState(true);
    const ver =() =>{
        setMostrar(!mostrar);
    };
    

    return(
        <div className="contenedorBot">
            
            <button onClick={ver}>Show/Hide</button>
            {mostrar ? <h1>Welcome to React Challenges</h1> : null}
        </div>
    );
}
export default Boton;

