import Asesino from "./roles/Asesino"
const Actions = ({ role, onConfirm, onClose, handleClick, players }) => {
    const getRoleAction = () => {
        switch (role) {
            case "asesino":
                return{
                    title:"Asesino - Accion: Matar",
                    description:"Eres un asesino asi que asesina",
                    action:()=><Asesino players={players}/>,
                };
            case "medico":
                const papaa =()=>{console.log("a")}
                return{
                    title:"Medico - Accion: Proteger",
                    description:"Eres un medico, protege a quien creas conveniente",
                    action:papaa,
                };
            case "policia":
                const papaaa =()=>{console.log("a")}
                return{
                    title:"Policia - Accion: Arrestar",
                    description:"Eres un policia, arresta a quien creas que es el asesino",
                    action:papaaa, 
                };
            case "verdulero":
                
                const papaaaa =()=>{console.log("a")}
                return{
                    title:"Verdulero - Accion: Normal",
                    description:"Eres un verdulero, haz cosas normales de verdulero, como vender papa",
                    action:papaaaa 
                };
                case "panadero":
                    const papaaaaa = ()=>{console.log("a")}
                    return{
                        title:"Panadero - Accion: Normal",
                        description:"Eres un panadero, haz cosas normales de panadero, como vender pan",
                        action:papaaaaa 
                    };
                    default:
                    case "carnicero":
                        const papaaaaaa = ()=>{console.log("a")}
                        
                        return{
                            title:"Carnicero - Accion: Normal",
                            description:"Eres un carnicero, haz cosas normales de carnicero, como vender carne",
                            action:papaaaaaa
                        }
        }
    }

    const {title, description, action} = getRoleAction();
    return (
        <>
            <dialog open>
                <article>
                    <h2>{title}</h2>
                    <p>
                        {description}
                    </p>
                    <footer>
                        <button onClick={onClose} className="secondary">
                            Cancelar
                        </button>
                        {role === "asesino" && action()}
                        <button onClick={() => { action(); onConfirm(); handleClick() }}>
                            Confirmar
                        </button>
                    </footer>
                </article>
            </dialog>
        </>
    )
}
export default Actions;