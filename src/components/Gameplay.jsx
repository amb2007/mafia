import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import Actions from "./Actions";
import "./Gamplay.css";

const Gameplay = ({ players }) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const ConfirmAction = () => {
    // Verificamos que players[index] no sea undefined
    if (players[index]) {
      console.log(`${players[index].role} ha realizado su acción`);
    } else {
      console.warn("No hay un jugador disponible para realizar la acción");
    }
    setShowModal(false);
  };

  const OpenAction = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    if (players.length > 0) {
      // Solo actualizamos el índice si hay jugadores
      if (index < players.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  };

  // Si no hay jugadores, mostramos un mensaje
  if (players.length === 0) {
    return <div>No hay jugadores disponibles.</div>;
  }

  return (
    <div className="gameplay-container">
      <h3>Turno de {players[index].name}</h3>
      <Cards players={players} index={index} />

      <button onClick={OpenAction}>Acciones</button>
      {showModal && (
        <Actions
          role={players[index].role}
          onConfirm={ConfirmAction}
          onClose={() => setShowModal(false)}
          handleClick={handleClick}
          players={players}
          currentPlayer={players[index]} // Pasa el jugador actual
        />
      )}
    </div>
  );
};

export default Gameplay;
