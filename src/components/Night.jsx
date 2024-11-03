import axios from "axios";
import { useEffect } from "react";

const Night = ({ saveAs, saveDoc, players, onActionComplete }) => {
    useEffect(() => {
        // Solo proceder si saveAs y saveDoc son válidos
        if (saveAs !== null && saveDoc !== null) {
            // Asegúrate de que los índices sean válidos
            const targetPlayer = players[saveAs];
            const savedPlayer = players[saveDoc];

            // Verifica que el jugador objetivo y el jugador salvado existan
            if (targetPlayer && savedPlayer) {
                const message = saveAs === saveDoc
                    ? `El jugador ${savedPlayer.name} ha sido salvado por el médico.`
                    : `El jugador ${targetPlayer.name} no ha podido ser salvado por el médico y murió.`;

                window.alert(message);

                // Actualiza el estado del jugador asesinado
                if (saveAs !== saveDoc) {
                    axios.put(`http://localhost:3000/caracters/${targetPlayer.id}`, {
                        name: targetPlayer.name,
                        role: "muerto",
                    })
                    .then(response => console.log(response))
                    .catch(error => console.log(error));
                }

                // Llama a la función para finalizar la acción de la noche
                onActionComplete(); 
            } else {
                console.error("Los índices de los jugadores no son válidos.", { saveAs, saveDoc, players });
            }
        }
    }, [saveAs, saveDoc, players, onActionComplete]);

    return (
        <div className="night">
            <h2>Fase de Noche</h2>
            {/* Aquí podrías agregar más detalles sobre lo que sucede en la noche */}
        </div>
    );
};

export default Night;
