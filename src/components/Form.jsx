import { toast } from "react-toastify";
import "./NavBar.css";

function Form({ players, setPlayers, handlePlayers }) {
  const handleChange = (event, id) => {
    const { value } = event.target;

    const updatedPlayers = players.map(player =>
      player.id === id ? { ...player, name: value } : player
    );

    setPlayers(updatedPlayers);
  };

  const validationName = name => {
    if (name.trim() === "") {
      return "El nombre no puede estar vacío";
    } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)) {
      return "El nombre solo puede contener letras válidas";
    } else if (name.length < 3) {
      return "El nombre debe tener al menos 3 caracteres";
    }
    return null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    let valid = true;

    players.forEach(player => {
      const errorMessage = validationName(player.name);
      if (errorMessage) {
        valid = false;
        toast.error(errorMessage);
      }
    });

    if (valid) {
      handlePlayers();
    }
  };

  return (
    <div className="App-header">
      <h2 className="encabezado-form">Ingreso de Jugadores</h2>
      <form onSubmit={handleSubmit}>
        {players.map(player => (
          <main key={player.id}>
            <label htmlFor={`nombre${player.id}`}>
              Nombre del usuario {player.id}:
            </label>
            <input
              type="text"
              id={`nombre${player.id}`}
              name={`nombre${player.id}`}
              value={player.name}
              onChange={e => handleChange(e, player.id)}
            />
          </main>
        ))}
        <div role="group">
          <button>Guardar Jugadores y Asignar Roles</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
