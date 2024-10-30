
const Asesino = ({players, setSaveAs}) => {

const [selectedPlayers, setSelectedPlayers] = useState(null)
return (
    <>
        <h3>Selecciona a quien quieres asesinar:</h3>
        <ul>
            {players.map(player => (
                <li key={player.id}>
                    <button onClick={() => 
                        {setSelectedPlayers(player)
                         setSaveAs(player.id)
                        }}>
                        {player.name}
                    </button>
                </li>
            ))}
        </ul>
        <button onClick={DeleteChar} disabled={!selectedPlayers}>Asesinar</button>
    </>
);
};

export default Asesino;