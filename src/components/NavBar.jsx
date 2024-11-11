import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './css/Navbar.css'
const NavBar = () => {
  const navigate =  useNavigate();

  const location = useLocation();
    return(
        <>
        <nav className="nav">
          <img src='logo.png' alt="logo" className="logo"  onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}></img>
          <ul>
            {location.pathname === '/game' && (
              <li><button><Link to="/home">Ver reglas</Link></button></li>
            )}
            {
              location.pathname === '/home' && (
                <li><button><Link to="/game">Juego</Link></button></li>
              )
            }
            
          </ul>
        </nav>
        </>
    )
}
export default NavBar;