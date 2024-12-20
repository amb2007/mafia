import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Asesino = ({ players, setSaveAs }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    let filteredPlayer = players.filter((player)=> player.role != "muerto")
    console.log(filteredPlayer)
    const handleKill = () => {
        if (selectedPlayer) {
            setSaveAs(selectedPlayer.id); // Guarda el ID del jugador que se intenta asesinar
            console.log(players[setSaveAs])
            toast.success(`Has asesinado a ${selectedPlayer.name}`);
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
            <button onClick={handleKill} disabled={!selectedPlayer}>
                Asesinar
            </button>
        </div>
    );
};

export default Asesino;
