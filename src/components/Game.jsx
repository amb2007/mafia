import { useState } from "react";
import axios from "axios";
function Game(){
    const db="http://localhost:3000/caracters"
    const [caracters, setCaracters] = useState([]);

  const saveCar = () => {
    axios.get(`db`)
    .then((response) => console.log(response.data))
    .catch(error=>console.log(error))
  }
    return(
        <>
        <h1>Juego en progreso...</h1>
        <button onClick={saveCar}>Obtener Info</button>
        </>
    )
}
export default Game;