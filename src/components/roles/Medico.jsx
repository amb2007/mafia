import { useState } from "react";
import { toast } from "react-toastify";

const Medico = ({ players, setSaveDoc }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    let filteredPlayer = players.filter((player)=> player.role != "muerto")
    console.log(filteredPlayer)
    const handleSave = () => {
        if (selectedPlayer) {
            setSaveDoc(selectedPlayer.id); // Guarda el ID del jugador que se intenta salvar
            toast.success(`Has salvado a ${selectedPlayer.name}`);
            setSelectedPlayer(null); // Limpia la selección
        }
    };

    return (
        <div>
            <h3>Selecciona a quien quieres salvar:</h3>
            <ul>
                {filteredPlayer.map(player => (
                    <li key={player.id}>
                        <button onClick={() => setSelectedPlayer(player)}>
                            {player.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleSave} disabled={!selectedPlayer}>
                Salvar
            </button>
        </div>
    );
};

export default Medico;
