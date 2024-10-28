import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="rules-container">
            <h1 className="mafia-title">Bienvenidos al Juego Mafia</h1>
            <div className="rules">
                <p className="rule-text">En este juego se jugará:</p>
                <ul className="rule-list">
                    <li>Los jugadores se dividen en distintos roles.</li>
                    <li>Los asesinos intentarán eliminar a los civiles.</li>
                    <li>Los policias deberán descubrir quiénes son los mafiosos.</li> 
                    <li>Usa tu astucia y estrategia para ganar.</li>
                </ul>
                <Link to='/game'>
                    <button className='play-button'>¡Juego!</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;