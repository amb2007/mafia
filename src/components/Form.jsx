import { useState } from "react";
import { toast } from "react-toastify";
function Form({ players, setPlayers, savePlayers }) {
    const handleChange = (event, id) => {
        const { value } = event.target;

        const updatedPlayers = players.map((player) =>
            player.id === id ? { ...player, name: value } : player
        );

        setPlayers(updatedPlayers);
    };
    const validationName = (name) => {
        if (name.trim() === ""){
          return "El nombre no puede estar vacio"
        } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)){
          return "El nombre solo puede contener letras válidas"
        } else if(name.length < 3){
          return "El nombre debe tener al menos 3 caracteres"
        }
      }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const validName=validationName(players.name)
    }
    return (
        <>
            <div className="App-header">
                <h2>Ingreso de Jugadores</h2>
                {players.map((player) => (
                    <div key={player.id}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor={`nombre${player.id}`}>Nombre del usuario {player.id}:</label>
                            <input
                                type="text"
                                id={`nombre${player.id}`}
                                name={`nombre${player.id}`}
                                value={player.name}
                                onChange={(e) => handleChange(e, player.id)}
                            />
                        </form >
                    </div>
                ))}
                <button onClick={handleSubmit}>Guardar Jugadores</button>
            </div>
        </>
    );
};

export default Form;