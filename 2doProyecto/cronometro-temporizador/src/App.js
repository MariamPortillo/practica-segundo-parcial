import React, {useState} from "react";
import './App.css';
import BotonStart from './components/BotonStart'
import BotonStop from './components/BotonStop'
import BotonReset from './components/BotonReset'
import Cronometro from './components/Cronometro'
import Titulo from './components/Titulo'

function App() {
  const  [time, setTime] = useState({s:0, m:0})
  return (
    <div className="App">
      <div className="container">
        <div className="containerText">
          <Titulo title="Timer"/>
          <Cronometro time={time}/>
        </div>
        <div className='containerBoton'>
          <BotonStart/>
          <BotonStop/>
          <BotonReset/>
        </div>
      </div>
    </div>
  );
}

export default App;
