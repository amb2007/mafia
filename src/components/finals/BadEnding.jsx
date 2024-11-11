import { useNavigate } from "react-router-dom";
import "../css/Ending.css";

const BadEnding = () => {
    const navigate = useNavigate();
    return (
        <div className="ending-container bad-ending">
            <h1 className="ending-title">¡Ganó el Asesino!</h1>
            <p>¿Quieres jugar de nuevo?</p>
            <button className="ending-button" onClick={() => navigate("/game")}>
                Volver a Jugar
            </button>
        </div>
    );
};

export default BadEnding;
