import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import './finals/GoodEnding'
import './finals/BadEnding'
import { useNavigate } from "react-router-dom";

const Night = ({ saveAs, saveDoc, players, onActionComplete, setPlayers, savePol }) => {
    const [toastShow, setToastShow] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // Solo continuar si saveAs y saveDoc son validos
        if (saveAs !== null && saveDoc !== null && savePol !== null) {

            const targetPlayer = players[saveAs];
            const savedPlayer = players[saveDoc];
            const arrestedPlayer = players[savePol];

            // Verifica que el jugador objetivo y el jugador salvado existan
            if (targetPlayer && savedPlayer) {
                if(!toastShow){
                const message = saveAs === saveDoc
                    ? `El jugador ${savedPlayer.name} ha sido salvado por el médico.`
                    : `El jugador ${targetPlayer.name} no ha podido ser salvado por el médico y murió.`;

                toast.info(message);
                setToastShow(true)
                }
                // Actualiza el estado del jugador asesinado
                if (saveAs !== saveDoc) {
                    axios.put(`http://localhost:3000/caracters/${targetPlayer.id}`, {
                        id: targetPlayer.id,
                        name: targetPlayer.name,
                        role: "muerto",
                    })
                    .then(response => {
                        let aux = [...players]
                        aux[targetPlayer.id] = response.data;
                        setPlayers(aux)
                        console.log(aux)
                        checkVictory(aux)
                    }
                        
                    )
                    .catch(error => console.log(error));
                console.log(savePol)
                if(savePol){
                    axios.put(`http://localhost:3000/caracters/${arrestedPlayer.id}`, {
                        id: arrestedPlayer.id,
                        name: arrestedPlayer.name,
                        role: "arrestado",
                    })
                    .then(response => {
                        let aux = [...players]
                        aux[arrestedPlayer.id] = response.data;
                        setPlayers(aux)
                        console.log(aux)
                        checkVictory(aux)
                    }
                        
                    )
                    .catch(error => console.log(error));
                }

                }

                onActionComplete(); 
            } else {
                console.error("Los índices de los jugadores no son válidos.", { saveAs, saveDoc, players, savePol });
            }
        }
    }, [saveAs, saveDoc, players, onActionComplete, savePol, toastShow]);


const checkVictory = (players) => {
    const hasAssassin = players.some(player => player.role === "asesino");
    const hasPolice = players.some(player => player.role === "policia");

    if (!hasAssassin) {

        toast.success("Los civiles han ganado. El asesino fue arrestado.");
        navigate('/good-ending')

    } else if (!hasPolice) {

        toast.error("El asesino ha ganado. El policía fue asesinado.");
        navigate('/bad-ending')
    } else {
        console.log("El juego continúa.");
    }
};

    return (<></>);
};

export default Night;
