import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Policia = ({ players, setSavePol }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    let filteredPlayer = players.filter((player)=> player.role != "arrestado")
    console.log(filteredPlayer)
    const handleArrested = () => {
        if (selectedPlayer) {
            setSavePol(selectedPlayer.id); // Guarda el ID del jugador que se intenta asesinar
            console.log(players[setSavePol])
            toast.success(`Has arrestado de manera violenta a ${selectedPlayer.name}`);
            setSelectedPlayer(null); // Limpia la selección
        }
    };

    return (
        <div>
            <h3>Selecciona a quien quieres asesinar:</h3>
            <ul>
                {filteredPlayer.map(player => (
                    <li key={player.id}>
                        <button onClick={() => setSelectedPlayer(player)}>
                            {player.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleArrested} disabled={!selectedPlayer}>
                Arrestar
            </button>
        </div>
    );
};

export default Policia;
