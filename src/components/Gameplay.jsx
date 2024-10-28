import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import Actions from "./Actions";
import './Gamplay.css'
const Gameplay = ({ players }) => {
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const ConfirmAction = () => {
    console.log(`${(players.role)} A realizado su accion`)
    setShowModal(false)
  }
  const OpenAction = () => {
    setShowModal(true)
    
  }
  const handleClick = ()=>{
    if(index < players.length - 1){
      setIndex(index +1)
    }
    else {
      setIndex(0)
    }
  }
  return (
    <div className="gameplay-container">
      <h3>Turno de {players[index].name}</h3>
        <Cards players = {players} index = {index} />
        

        <button onClick={OpenAction}>Acciones</button>
        {showModal && (
          <Actions  
          role={players[index].role}
          onConfirm={ConfirmAction}
          onClose={()=>setShowModal(false)}
          />
        )}
        <button onClick={handleClick}>Siguinte jugador </button>
    </div>
  );
};

export default Gameplay;  