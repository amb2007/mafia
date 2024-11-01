import Turn from "./turn";

const Actions = ({
  role,
  onConfirm,
  onClose,
  handleClick,
  players,
  currentPlayer,
}) => {
  const getRoleAction = () => {
    switch (role) {
      case "asesino":
        return {
          title: "Asesino - Acción: Matar",
          description: "Eres un asesino, así que asesina a alguien.",
          action: () => (
            <Turn
              player={currentPlayer}
              players={players}
              onActionComplete={handleClick}
            />
          ),
        };
      case "medico":
        return {
          title: "Médico - Acción: Proteger",
          description: "Eres un médico, protege a quien creas conveniente.",
          action: () => (
            <Turn
              player={currentPlayer}
              players={players}
              onActionComplete={handleClick}
            />
          ),
        };
      case "policia":
        return {
          title: "Policía - Acción: Arrestar",
          description:
            "Eres un policía, arresta a quien creas que es el asesino.",
          action: () => {
            console.log("Acción de Policía");
          },
        };
      case "verdulero":
        return {
          title: "Verdulero - Acción: Normal",
          description: "Eres un verdulero, haz cosas normales de verdulero.",
          action: () => {
            console.log("Acción de Verdulero");
          },
        };
      case "panadero":
        return {
          title: "Panadero - Acción: Normal",
          description: "Eres un panadero, haz cosas normales de panadero.",
          action: () => {
            console.log("Acción de Panadero");
          },
        };
      case "carnicero":
        return {
          title: "Carnicero - Acción: Normal",
          description: "Eres un carnicero, haz cosas normales de carnicero.",
          action: () => {
            console.log("Acción de Carnicero");
          },
        };
      default:
        return {
          title: "Rol Desconocido",
          description: "No tienes una acción definida.",
          action: () => {
            console.log("Acción Desconocida");
          },
        };
    }
  };

  const { title, description, action } = getRoleAction();

  return (
    <>
      <dialog open>
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <footer>
            <button onClick={onClose} className="secondary">
              Cancelar
            </button>
            <button
              onClick={() => {
                action();
                onConfirm();
                handleClick();
              }}
            >
              Confirmar
            </button>
          </footer>
          {/* Aquí renderizamos la acción del rol si es necesario */}
          {action && action()}
        </article>
      </dialog>
    </>
  );
};

export default Actions;
