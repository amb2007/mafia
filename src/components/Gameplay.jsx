import React from "react";
import Cards from "./Cards";
import { useState } from "react";
const Gameplay = ({ players }) => {
  const [index, setIndex] = useState(0)
  const handleClick = ()=>{
    if(index < 7){
      setIndex(index +1)
    }
  }
  return (
    <div className="Gameplay-container">
      <h3>Turno de {players[index].name}</h3>
        <Cards players = {players} index = {index} />
        <button onClick={handleClick}>Siguinte jugador </button>
    </div>
  );
};

export default Gameplay;  