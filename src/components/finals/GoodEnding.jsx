import { useNavigate } from "react-router-dom";
import "../css/Ending.css";

const GoodEnding = () => {
    const navigate = useNavigate();
    return (
        <div className="ending-container good-ending">
            <h1 className="ending-title">¡Ganó el Pueblo!</h1>
            <p>¿Quieres volver a jugar?</p>
            <button className="ending-button" onClick={() => navigate("/game")}>
                Volver a Jugar
            </button>
        </div>
    );
};

export default GoodEnding;
