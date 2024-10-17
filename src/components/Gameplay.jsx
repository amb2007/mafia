import React from "react";

const Gameplay = ({ players }) => {
    return (
        <div className="Gameplay-container">
            <h3>Turno de los jugadores</h3>
            <div className="cards">
                {players.map((player) => (
                    <div key={player.id} className="card">
                        <h4>{player.name}</h4>
                        <img 
                            src={`images/${player.role}.png`} 
                            width="20px" 
                            alt={`Imagen de rol de ${player.name}`} 
                        />
                        <p>Rol: {console.log(player.role)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gameplay;
