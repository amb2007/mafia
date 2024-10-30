const Medico = ({players, setSaveDoc}) => {

    const [selectedPlayers, setSelectedPlayers] = useState(null)
    return (
        <>
            <h3>Selecciona a quien quieres salvar:</h3>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        <button onClick={() => 
                            {setSelectedPlayers(player)
                             setSaveDoc(player.id)
                            }}>
                            {player.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={DeleteChar} disabled={!selectedPlayers}>Salvar</button>
        </>
    );
    };
    
    export default Medico;