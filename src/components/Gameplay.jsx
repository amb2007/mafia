import React from "react";

const Gameplay = ({ players }) => {
  const arr = [1, 2, 3, 4, 5, 6];
    let index = 0;
  const showPlayers = () => {
    for (let index = 0; index < arr.length; index++) {
      id = index;
      <>Turno de {players[id].name}</>;
    }
  };
  return (
    <div className="Gameplay-container">
      <h3>Turno de los jugadores</h3>
      <div className="cards"></div>
      <div key={players[index].id} className="card">
        <h4>{players[index].name}</h4>
        <img
          src={`images/${players[index].role}.png`}
          width="200px"
          alt={`Imagen de rol de ${players[index].name}`}
        />
        <p>Rol: {console.log(players[index].role)}</p>
      </div>
    </div>
  );
};

export default Gameplay;