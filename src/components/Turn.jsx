import { useState } from "react";
import Asesino from "./roles/Asesino";
import Medico from "./roles/Medico";
import Night from "./Night"; // Importamos el componente Night

const Turn = ({ player, players, onActionComplete, saveAs, setSaveAs, saveDoc, setSaveDoc }) => {
    const [isNight, setIsNight] = useState(false); // Estado para manejar la transición a la noche

    const DoAction = () => {
        if (player.role === "asesino") {
            return <Asesino players={players} setSaveAs={setSaveAs} />;
        } else if (player.role === "medico") {
            return <Medico players={players} setSaveDoc={setSaveDoc} />;
        }
        return null;
    };

    const handleNight = () => {
        setIsNight(true); // Cambiamos a la fase de noche
    };

    if (isNight) {
        return (
            <Night 
                saveAs={saveAs} 
                saveDoc={saveDoc} 
                players={players} 
                onActionComplete={() => {
                    setIsNight(false);
                    onActionComplete(); // Marca la acción como completa
                }} 
            />
        );
    }

    return (
        <>
            {DoAction()}
            <button onClick={handleNight} >
                Finalizar Turno
            </button>
        </>
    );
};

export default Turn;
