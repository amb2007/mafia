import axios from "axios";
import { useState } from "react";
const Asesino = ({players}) => {

    const DeleteChar = () => {
        if(selectedPlayers){
        axios.delete(`http://localhost:3000/caracters/${player.id}`)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
}
    const [selectedPlayers, setSelectedPlayers] = useState(null)
    return (
        <>
        <h3>Selecciona a quien quieres asesinar:</h3>
        <ul>
            {players.map(player  =>  (
                <li key={player.id}>
                    <button onClick={()=> setSelectedPlayers(player.id)}>
                        {player.name}
                    </button>
                </li>
            ))}
        </ul>
        <button onClick={DeleteChar} disabled={!selectedPlayers}>Asesinar</button>
        </>
    );
};

export default Asesino;