import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Actions from "./Actions";
import Night from "./Night"; // Componente opcional para la fase de noche
import "./css/Gamplay.css";

const Gameplay = ({ players, setPlayers }) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [updatedPlayers, setUpdatedPlayers] = useState(players);
  const [saveAs, setSaveAs] = useState(null); // ID del jugador que el asesino quiere matar
  const [saveDoc, setSaveDoc] = useState(null);
  const [savePol, setSavePol] = useState(null); // ID del jugador que el médico quiere salvar
  const [isNightPhase, setIsNightPhase] = useState(false); // Controla si estamos en la fase de noche

  const updatePlayerStatus = (playerId, newRole) => {
    setUpdatedPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.id === playerId ? { ...player, role: newRole } : player
      )
    );
  };

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
        setIsNightPhase(true); // Cambia a la fase de noche
        setIndex(0); // Reinicia el índice para la siguiente ronda
      }
    }
  };
  

  // Manejar la lógica de la fase de noche
  const handleNightPhase = () => {
    if (isNightPhase) {
      // Aquí podrías evaluar las acciones del asesino y el médico
      console.log("Evaluando la fase de noche...");
      // Resetea los estados de acción
      setSaveAs(null);
      setSaveDoc(null);
      setSavePol(null);
      setIsNightPhase(false); // Regresa a la fase de día
    }
  };

  useEffect(() => {
    handleNightPhase(); // Llama a la función para manejar la fase de noche
  }, [isNightPhase]);

  if (players.length === 0) {
    return <div>No hay jugadores disponibles.</div>;
  }

  return (
    <div className="gameplay-container">
      <h3>Turno de {players[index].name}</h3>
      <Cards players={updatedPlayers} index={index} />

      <button onClick={OpenAction}>Acciones</button>
      {showModal && (
    <Actions
        role={updatedPlayers[index].role}
        onConfirm={ConfirmAction}
        onClose={() => setShowModal(false)}
        handleClick={handleClick}
        players={updatedPlayers}
        currentPlayer={updatedPlayers[index]}
        updatePlayerStatus={updatePlayerStatus}
        setSaveAs={setSaveAs} // Asegúrate de que esto esté aquí
        setSaveDoc={setSaveDoc}
        savePol={savePol}
        setSavePol={setSavePol} // Asegúrate de que esto también esté aquí
    />
)}


      {/* Opcionalmente mostrar la fase de noche */}
      {isNightPhase && (
        <Night 
          saveAs={saveAs} 
          saveDoc={saveDoc}
          savePol={savePol} 
          players={updatedPlayers}
          setPlayers={setPlayers}
          onActionComplete={() => console.log("Acciones de la noche completadas")} 
        />
      )}
    </div>
  );
};

export default Gameplay;
