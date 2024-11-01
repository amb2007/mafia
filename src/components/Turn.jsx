import axios from "axios";
import { useState, useEffect } from "react";
import Asesino from "./roles/Asesino";
import Medico from "./roles/Medico";

const Turn = ({ player, players, onActionComplete }) => {
    const [saveAs, setSaveAs] = useState(null);
    const [saveDoc, setSaveDoc] = useState(null);

    const DoAction = () => {
        if (player.role === "asesino") {
            return <Asesino players={players} setSaveAs={setSaveAs} />;
        } else if (player.role === "medico") {
            return <Medico players={players} setSaveDoc={setSaveDoc} />;
        }
        return null;
    };

    useEffect(() => {
        if (saveAs !== null && saveDoc !== null) {
            const message = saveAs === saveDoc
                ? `El jugador ${players[saveDoc].name} ha sido salvado por el médico.`
                : `El jugador ${players[saveDoc].name} no ha podido ser salvado por el médico y murió.`;

            window.alert(message);

            if (saveAs !== null) {
                axios.put(`http://localhost:3000/caracters/${players[saveAs].id}`, {
                    name: players[saveAs].name,
                    role: "muerto",
                })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            }

            onActionComplete(); 
            setSaveAs(null);
            setSaveDoc(null);
        }
    }, [saveAs, saveDoc, players, onActionComplete]);

    return <>{DoAction()}</>;
};

export default Turn;
