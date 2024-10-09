import { useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const db="http://localhost:3000/caracters"
  const [caracters, setCaracters] = useState([]);
  
  const saveCar = () => {
    axios.get(`db`)
    .then((response) => console.log(response.data))
    .catch(error=>console.log(error))
  }
  return (
    <>
    <button onClick={()=>saveCar()}>boton</button>
    </>
  )
}

export default App
