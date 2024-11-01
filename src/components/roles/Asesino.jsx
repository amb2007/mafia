import { useState } from "react";
import { toast } from "react-toastify";
const Asesino = ({ players, setSaveAs }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handleKill = () => {
        if (selectedPlayer) {
            setSaveAs(selectedPlayer.id); // Guarda el ID del jugador que se intenta asesinar
            toast.success(`Has asesinado a ${selectedPlayer.name}`); // Mensaje de confirmación
            setSelectedPlayer(null);
        }
    };

    return (
        <div>
            <h3>Selecciona a quien quieres asesinar:</h3>
            <ul>
                {players.map(player => (
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
