import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Game({ setPlayers, players }) {
  const navigate = useNavigate();
  const db = "http://localhost:3000/caracters";
  const roles = ["asesino", "policia", "medico", "verdulero", "carnicero", "panadero"];

  // Función única para asignar roles y guardar jugadores
  const handlePlayers = () => {
    const shuffledRoles = roles.sort(() => Math.random() - 0.5);
    const updatedPlayers = players.map((player, index) => ({
      ...player,
      role: shuffledRoles[index]
    }));

    setPlayers(updatedPlayers);

    // Guardamos cada jugador uno por uno
    for (let i = 0; i < updatedPlayers.length; i++) {
      const player = updatedPlayers[i];
      axios.put(`${db}/${player.id}`, player)
        .then(response => {
          console.log("Jugador guardado:", response.data);
          if (i === updatedPlayers.length - 1) {
            toast.success("Roles asignados y jugadores guardados");
            navigate("/gameplay"); // Redirige a la página de juego
          }
        })
        .catch(error => {
          console.error("Error guardando jugador:", error);
          toast.error("Error al guardar jugador: " + player.name);
        });
    }
  };

  return (
    <>
      <Form players={players} setPlayers={setPlayers} handlePlayers={handlePlayers} />
    </>
  );
}

export default Game;
