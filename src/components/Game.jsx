import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Gameplay from "./Gameplay";

function Game({ setPlayers, players }) {
  const navigate = useNavigate();
  const db = "http://localhost:3000/caracters";
  const roles = ["asesino", "policia", "medico", "verdulero", "carnicero", "panadero"];

  const assignRoles = () => {
    
    const shuffledRoles = roles.sort(() => Math.random() - 0.5);

    const updatedPlayers = players.map((player, index) => ({
      ...player,
      role: shuffledRoles[index], // Asignamos roles de manera aleatoria
    }));

    // Actualizamos el estado de los jugadores con los roles asignados
    setPlayers(updatedPlayers);

    return updatedPlayers; 
  };

  const savePlayers = () => {
   
    const updatedPlayers = assignRoles();

    // Hacemos un PUT a la base de datos
    updatedPlayers.forEach(player => {
      axios.put(`http://localhost:3000/caracters/${player.id}`, player)
        .then(response => console.log("Jugador guardado:", response.data))
        .catch(error => console.error("Error:", error));
    });

    toast.success('Personas agregadas');
    assignRoles()
    navigate("/gameplay");
  };

  return (
    <>
      <Form players={players} setPlayers={setPlayers} savePlayers={savePlayers} assignRoles={assignRoles} />

    </>
  );
}

export default Game;
