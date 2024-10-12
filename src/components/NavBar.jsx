import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return(
        <>
        <nav className="nav">
          <img src='logo.png' alt="logo" className="logo"></img>
          <ul>
            <li><button><Link  to="/">Intro</Link></button></li>
            <li><button><Link to="/home">Ver reglas</Link></button></li>
            <li><button><Link to="/game">Juego</Link></button></li>
          </ul>
        </nav>
        </>
    )
}
export default NavBar;