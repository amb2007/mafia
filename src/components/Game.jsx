import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { toast } from "react-toastify";

function Game() {
  const db = "http://localhost:3000/caracters";
  const roles = ["asesino", "policia", "medico", "ciudadano", "ciudadano", "ciudadano"];
  
  const [players, setPlayers] = useState([
    { id: 1, name: "", role: "pampas" },
    { id: 2, name: "", role: "" },
    { id: 3, name: "", role: "" },
    { id: 4, name: "", role: "" },
    { id: 5, name: "", role: "" },
    { id: 6, name: "", role: "" },
  ]);

  const assignRoles = () => {
    // Mezclamos los roles para asignar de manera aleatoria
    const shuffledRoles = roles.sort(() => Math.random() - 0.5);

    const updatedPlayers = players.map((player, index) => ({
      ...player,
      role: shuffledRoles[index], // Asignamos roles de manera aleatoria
    }));

    setPlayers(updatedPlayers);
  };

  const savePlayers = () => {
    // Hacemos un POST a la base de datos
    players.forEach(player => {
      axios.put(`http://localhost:3000/caracters/${player.id}`, player)
        .then(response => console.log("Jugador guardado:", response.data))
        .catch(error => console.error("Error:", error));
    });
    toast.success('Personas agregadas')
  };

  return (
    <>
      <button onClick={assignRoles}>Asignar Roles</button>
      <Form players={players} setPlayers={setPlayers} savePlayers ={savePlayers}></Form>
    </>
  );
}

export default Game;