import { useState } from "react";
import Asesino from "./roles/Asesino";
import Medico from "./roles/Medico";


const Turn = ({ player, players, setSaveAs, setSaveDoc }) => {


    const DoAction = () => {
        if (player.role === "asesino") {
            return <Asesino players={players} setSaveAs={setSaveAs} />;
        } else if (player.role === "medico") {
            return <Medico players={players} setSaveDoc={setSaveDoc} />;
        }
        return null;
    };



    return (
        <>
            {DoAction()}
            
        </>
    );
};

export default Turn;
