import axios from "axios";
import { useState } from "react";
import Asesino from "./roles/Asesino";
import Medico from "./roles/Medico";
const Turn = ({ players }) => {
        if(selectedPlayers.role === "asesino") {
            <Asesino players ={players} setSaveAs = {setSaveAs}/>
        }
        else{
            <Medico players ={players} setSaveDoc = {setSaveDoc}/>
        }
    const[saveAs,setSaveAs] = useState(null)
    const[saveDoc,setSaveDoc] = useState(null)
    if(saveAs === saveDoc){
        window.alert(`jugador ${players[saveDoc].name} a sido salvado por el medico `)
    }
    else{
        window.alert(`jugador ${players[saveDoc].name} no a podido ser salvado por el medico y murio `)
        
            if (saveAs) {
                axios.put(`http://localhost:3000/caracters/${players[saveAs].id}`, {
                    name: players[saveAs].name,
                    role: "muerto"
                })
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        
    }
    
    return (
        <>

        </>
    );
};

export default Turn;