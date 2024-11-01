import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Intro.css';

const Intro = () => {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Iniciando temporizador"); // Comprobar si se activa el temporizador
        const timer = setTimeout(() => {
            setShowOptions(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="intro-container">
            <h1 className="mafia-title">mafia</h1>
            {showOptions && (
                <div className="options-container">
                    <button onClick={() => navigate('/home')}>Ver reglas</button>
                    <button onClick={() => navigate('/game')}>Jugar</button>
                </div>
            )}
        </div>
    );
};

export default Intro;
