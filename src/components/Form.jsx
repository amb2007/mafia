import { useState } from "react";
import { toast } from "react-toastify";
import './NavBar.css'
function Form({ players, setPlayers, savePlayers, assignRoles }) {
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
        let valid = true;

       
        players.forEach(player => {
            const errorMessage = validationName(player.name);
            if (errorMessage) {
                valid = false;
                toast.error(errorMessage); 
            }
        });

        if (valid) {
            savePlayers();
        }
    };
    return (
        <>
            <div className="App-header">
                <h2 className="encabezado-form">Ingreso de Jugadores</h2>
                {players.map((player) => (
                    <main key={player.id}>
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
                    </main>
                ))}
                <div role="group">
                <button onClick={handleSubmit}>Guardar Jugadores</button>
                <button onClick={assignRoles}>Asignar Roles</button>
                </div>
            </div>
        </>
    );
};

export default Form;