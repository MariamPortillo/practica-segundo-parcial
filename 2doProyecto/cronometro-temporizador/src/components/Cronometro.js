import React from "react";

function Cronometro(props) {
    return (
      <div className="contentCron">
        <span>{props.time.m} mins</span>
        <span>{props.time.s} secs</span>
      </div>
    );
  }
  
  export default Cronometro;