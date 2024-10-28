import { useState } from "react";
const Cards = ({players, index}) => {
    return(
        <>
            <div className="cards"></div>
      <div key={players[index].id} className="card">
        <h4>{players[index].name}</h4>
        <img
          src={`images/${players[index].role}.png`}
          width="200px"
          alt={`Imagen de rol de ${players[index].name}`}
        />
        <p>Rol: {players[index].role}</p>
      </div>
        </>
    )
}
export default Cards;